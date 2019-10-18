/**
 * Function validate note
 * @param {String} note - full note name ('A4', 'A4#x2' etc.)
 * @return {Boolean}
 */
export default function (note: string): boolean {
  return /^[A-G][0-8]$/.test(note) || // note like 'E3'
    /^[A-G][0-8]x\d+$/.test(note) || // note like 'G7x2'
    /^.$/.test(note) || // note like '.'
    /^.x\d+$/.test(note) || // note like '.x4'
    false;
}
