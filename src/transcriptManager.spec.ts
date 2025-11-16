import * as db from './transcriptManager';

describe('Testing addStudent() method', () => {
  beforeEach(() => {
    db.initialize();
  });

  it('should create 4 dummy students when you call initialize()', () => {
    const transcripts = db.getAll();
    expect(transcripts.length).toBe(4);
  });

  it('should check valid inputs for addStudent()', () => {
    const length = db.getAll().length;
    const id = db.addStudent('Li');
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThanOrEqual(length);
  });

  it('should check invalid inputs for addStudent()', () => {
    expect(() => db.addStudent(null as unknown as string)).toThrow();
    expect(() => db.addStudent('')).toThrow();
  });
});