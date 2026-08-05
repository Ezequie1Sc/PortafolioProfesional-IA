interface CertificateFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  counts: {
    todos: number;
    programacion: number;
    datos: number;
    ia: number;
    ciberseguridad: number;
    idiomas: number;
    profesional: number;
  };
}

const CertificateFilter = ({ activeFilter, onFilterChange, counts }: CertificateFilterProps) => {
  const filters = [
    { id: 'todos', label: 'Todos', count: counts.todos },
    { id: 'programacion', label: 'Programación', count: counts.programacion },
    { id: 'datos', label: 'Datos', count: counts.datos },
    { id: 'ia', label: 'Inteligencia Artificial', count: counts.ia },
    { id: 'ciberseguridad', label: 'Ciberseguridad', count: counts.ciberseguridad },
    { id: 'idiomas', label: 'Idiomas', count: counts.idiomas },
    { id: 'profesional', label: 'Profesional', count: counts.profesional },
  ];

  return (
    <div className="certificate-filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`certificate-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          <span className="filter-label">{filter.label}</span>
          <span className="filter-count">{filter.count}</span>
        </button>
      ))}
    </div>
  );
};

export default CertificateFilter;