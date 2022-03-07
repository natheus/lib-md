import pegaArquivo from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("Deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("Deve retornar array com resultados", async () => {
    const resultado = await pegaArquivo("./test/arquivos/test_text.md");
    expect(resultado).toEqual(arrayResult);
  });
  it("Deve retornar mensagem 'não há links'", async () => {
    const resultado = await pegaArquivo("./test/arquivos/text_noLinks.md");
    expect(resultado).toBe("não há links");
  });
  it("Deve lançar um erro na falta de arquivo", async () => {
    await expect(pegaArquivo("./test/arquivos/")).rejects.toThrow(
      /não há arquivo no caminho/
    );
  });
  it("Deve resolver a função com sucesso", async () => {
    await expect(pegaArquivo("./test/arquivos/test_text.md")).resolves.toEqual(arrayResult);
  });
});
