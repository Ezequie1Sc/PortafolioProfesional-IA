import { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Video } from 'lucide-react';
import '../../styles/ProjectGallery.css';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
  videoUrl?: string;
  isMobileProject?: boolean;
}

const ProjectGallery = ({
  isOpen,
  onClose,
  projectTitle,
  images,
  videoUrl,
  isMobileProject = false,
}: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const showOnlyVideo = isMobileProject && videoUrl && !videoError;

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setImageLoaded(false);
      setImageDimensions(null);
      setVideoLoaded(false);
      if (showOnlyVideo) {
        setIsPlaying(true);
      }
    }
  }, [isOpen, projectTitle, showOnlyVideo]);

  useEffect(() => {
    if (videoRef.current && showOnlyVideo && videoLoaded) {
      const playVideo = async () => {
        try {
          if (isPlaying) {
            await videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        } catch (error) {
          console.log('Error al reproducir video:', error);
          setIsPlaying(false);
        }
      };
      playVideo();
    }
  }, [isPlaying, showOnlyVideo, videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play bloqueado:', err);
        setIsPlaying(false);
      });
    }
  };

  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
    setImageLoaded(false);
    setImageDimensions(null);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
    setImageLoaded(false);
    setImageDimensions(null);
  }, [images.length]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoaded(true);
    const img = e.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && !showOnlyVideo && images.length > 1) {
        prev();
      } else if (e.key === 'ArrowRight' && !showOnlyVideo && images.length > 1) {
        next();
      } else if (e.key === ' ' && showOnlyVideo) {
        e.preventDefault();
        togglePlayPause();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, prev, next, onClose, images.length, showOnlyVideo]);

  useEffect(() => {
    if (thumbnailsRef.current && images.length > 1 && !showOnlyVideo) {
      const activeThumb = thumbnailsRef.current.querySelector('.gallery-thumbnail.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex, images.length, showOnlyVideo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    if (showOnlyVideo) return;

    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen) return null;

  const hasMultiple = images.length > 1;
  const orientation = imageDimensions
    ? (imageDimensions.height > imageDimensions.width ? 'portrait' : 'landscape')
    : 'landscape';

  return (
    <div
      className="gallery-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={showOnlyVideo ? `Video demo de ${projectTitle}` : `Galería de ${projectTitle}`}
    >
      <div
        className={`gallery-container ${showOnlyVideo ? 'video-mode' : ''}`}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="gallery-header">
          <h3 className="gallery-title">
            {showOnlyVideo ? (
              <>
                <Video size={18} className="title-icon" />
                Demo: {projectTitle}
              </>
            ) : (
              projectTitle
            )}
          </h3>
          <button
            className="gallery-close"
            onClick={onClose}
            aria-label="Cerrar"
            type="button"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="gallery-content">
          {!showOnlyVideo && hasMultiple && (
            <button
              className="gallery-nav"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Imagen anterior"
              type="button"
            >
              <ChevronLeft size={28} strokeWidth={2} />
            </button>
          )}

          <div className={`gallery-media-wrapper ${showOnlyVideo ? 'video-wrapper' : 'image-wrapper'}`}>
            {showOnlyVideo ? (
              <div className="video-player-container">
                {!videoLoaded && (
                  <div className="video-loading">
                    <div className="spinner"></div>
                    <p>Cargando video...</p>
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="gallery-video-player"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  controls={false}
                  onLoadedData={handleVideoLoaded}
                  onError={() => setVideoError(true)}
                  style={{
                    opacity: videoLoaded ? 1 : 0,
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                    isolation: 'isolate',
                    willChange: 'transform',
                    filter: 'none',
                  }}
                />
                {videoLoaded && (
                  <div className="video-controls-bar">
                    <button
                      className="video-btn"
                      onClick={togglePlayPause}
                      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      className="video-btn"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {!imageLoaded && (
                  <div className="image-loading">
                    <div className="spinner"></div>
                  </div>
                )}
                <img
                  ref={imageRef}
                  src={images[currentIndex]}
                  alt={`${projectTitle} - Imagen ${currentIndex + 1} de ${images.length}`}
                  className="gallery-image"
                  data-orientation={orientation}
                  onLoad={handleImageLoad}
                  draggable={false}
                  style={{ opacity: imageLoaded ? 1 : 0 }}
                />
              </>
            )}
          </div>

          {!showOnlyVideo && hasMultiple && (
            <button
              className="gallery-nav"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Imagen siguiente"
              type="button"
            >
              <ChevronRight size={28} strokeWidth={2} />
            </button>
          )}
        </div>

        {!showOnlyVideo && hasMultiple && (
          <>
            <div className="gallery-thumbnails" ref={thumbnailsRef}>
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`gallery-thumbnail${index === currentIndex ? ' active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setImageLoaded(false);
                    setImageDimensions(null);
                  }}
                  aria-label={`Ver imagen ${index + 1}`}
                  type="button"
                >
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="gallery-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;