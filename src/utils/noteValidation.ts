/**
 * Function validate note
 * @param {String} note - full note name ('A4', 'A4#x2' etc.)
 * @return {Boolean}
 */
export default function (note: string): boolean {
  return /^[A-G][0-8](x\d+)?$/.test(note) || // note like 'E3' or 'G7x2'
    /^[A-G][0-8]#(x\d+)?$/.test(note) || // note like 'A4#' or 'B2#x3'
    /^.(x\d+)?$/.test(note) || // note like '.' or '.x4'
    false;
}
