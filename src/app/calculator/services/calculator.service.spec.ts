import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 1 + 4 = 5', () => {
    let soma: number = service.calcular(1, 4, CalculatorService.SOMA);
    expect(soma).toEqual(5);
  });

  it('should return 5 - 1 = 4', () => {
    let subtracao: number = service.calcular(5, 1, CalculatorService.SUBTRACAO);
    expect(subtracao).toEqual(4);
  });
  it('should return 1 / 4 = 0.25', () => {
    let divisao = service.calcular(1, 4, CalculatorService.DIVISAO);
    expect(divisao).toEqual(0.25);
  });
  it('should return 1 * 4 = 4', () => {
    let multiplicacao = service.calcular(1, 4, CalculatorService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });

  it('should return 0 to invalid operation', () => {
    let operacaoInvalida = service.calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  });
});
