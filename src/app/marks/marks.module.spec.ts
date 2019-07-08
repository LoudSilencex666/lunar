import { MarksModule } from './marks.module';

describe('MarksModule', () => {
  let marksModule: MarksModule;

  beforeEach(() => {
    marksModule = new MarksModule();
  });

  it('should create an instance', () => {
    expect(marksModule).toBeTruthy();
  });
});
