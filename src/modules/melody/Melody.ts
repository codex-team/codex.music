/**
 * melody class
 */
export class Melody implements Iterable<string> {
  /**
   * getter for melody
   * @return string
   */
  get melody(): string {
    return this._melody.join(' ');
  }

  /**
   * setter for melody
   * @param value - string with notes, ' ' as separator
   */
  set melody(value: string) {
    this._melody = this.parse(value);
  }

  /**
   * @param melody - string with notes, contains ' ' as separator
   */
  constructor(melody: string) {
    this.melody = melody;
  }

  /**
   * iterator for notes
   */
  [Symbol.iterator](): Iterator<string, any, undefined> {
    let pointer = 0;
    const melody = this._melody;

    return {
      next(): IteratorResult<string> {
        if (pointer < melody.length) {
          return {
            done: false,
            value: melody[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }

  private _melody: string[];

  private parse = (rawMelody:string) => rawMelody.split(' ')
}
