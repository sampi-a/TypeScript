class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: string[];
    private _mails: string[];
    private _telefonos: string[];
    private _notas: string;
  
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: string, direcciones: string[], mails: string[], telefonos: string[], notas: string) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._edad = edad;
      this._dni = dni;
      this._cumpleaños = cumpleaños;
      this._colorFavorito = colorFavorito;
      this._sexo = sexo;
      this._direcciones = direcciones;
      this._mails = mails;
      this._telefonos = telefonos;
      this._notas = notas;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    get apellidos(): string {
      return this._apellidos;
  }
  
    set apellidos(apellidos: string) {
      this._apellidos = apellidos;
    }
  
    get edad(): number {
      return this._edad;
    }
  
    set edad(edad: number) {
      this._edad = edad;
    }
  
    get dni(): string {
      return this._dni;
    }
  
    set dni(dni: string) {
      this._dni = dni;
    }
  
    get cumpleaños(): Date {
      return this._cumpleaños;
    }
  
    set cumpleaños(cumpleaños: Date) {
      this._cumpleaños = cumpleaños;
    }
  
    get colorFavorito(): string {
      return this._colorFavorito;
    }
  
    set colorFavorito(colorFavorito: string) {
      this._colorFavorito = colorFavorito;
    }
  
    get sexo(): string {
      return this._sexo;
    }
  
    set sexo(sexo: string) {
      this._sexo = sexo;
    }
  
    get direcciones(): string[] {
      return this._direcciones;
    }
  
    set direcciones(direcciones: string[]) {
      this._direcciones = direcciones;
    }
  
    get mails(): string[] {
      return this._mails;
    }
  
    set mails(mails: string[]) {
      this._mails = mails;
    }
  
    get telefonos(): string[] {
      return this._telefonos;
    }
  
    set telefonos(telefonos: string[]) {
      this._telefonos = telefonos;
    }
  
    get notas(): string {
      return this._notas;
    }
  
    set notas(notas: string) {
      this._notas = notas;
    }
  }
  