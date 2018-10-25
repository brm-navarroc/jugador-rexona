import { JugadorRexonaPage } from './app.po';

describe('jugador-rexona App', () => {
  let page: JugadorRexonaPage;

  beforeEach(() => {
    page = new JugadorRexonaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
