export interface EventoFull {
  id: number;
  nombre: string;
  fechaIngreso: string;
  fechaEjecucion: string;
  fechaTermino: string;
  estado: Estado;
  tipo: string;
  lugar?: string;
  tipoDesarrollo: string;
  tipoEvento: string;
  numParticipantes: number;
  intercicloAsociados: any[];
  duracion: number;
  esDeGestion: boolean;
  esMeetup: boolean;
  idFecEjecucion: number;
  localidades: number[];
  esAsociada: boolean;
  dias: Dia[];
  tieneGaleria: boolean;
  objetivoActividad: string;
}

interface Dia {
  id: number;
  inicio: string;
  termino: string;
}

interface Estado {
  tipo: Tipo;
}

interface Tipo {
  nombre: string;
  situacion: string;
  id: number;
  posicion: number;
  fin: number;
}
