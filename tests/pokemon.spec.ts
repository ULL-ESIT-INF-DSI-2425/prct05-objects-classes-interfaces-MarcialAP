import { describe, expect, test} from "vitest"
import { Pokemon } from "../src/ejercicio-1/pokemon.ts"

const pikachu = new Pokemon("Pikachu", 50, 50, "electrico");

describe("pruebas de la creacion de Pikachu: ", () => {
  test("El nombre debe ser Pikachu: ", () => {
    expect(pikachu.nombre).toBe("Pikachu");
  });

  test("El peso debe ser 50: ", () => {
    expect(pikachu.peso).toBe(50);
  });

  test("La altura debe ser 50: ", () => {
    expect(pikachu.altura).toBe(50);
  });

  test("El tipo debe ser electrico: ", () => {
    expect(pikachu.tipo).toBe("electrico");
  });
});