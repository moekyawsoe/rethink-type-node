declare module '@marko/compiler/register' {
  interface MarkoCompilerRegisterOptions {
    meta: boolean;
  }

  function markoCompilerRegister(options: MarkoCompilerRegisterOptions): void;

  export = markoCompilerRegister;
}
