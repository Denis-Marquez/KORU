interface Usuario {
  nome: string;
  idade: number;
}

type Callback = () => void;

type Status = "ativo" | "inativo" | "pendente";

type UsuarioComStatus = Usuario & { status: Status };