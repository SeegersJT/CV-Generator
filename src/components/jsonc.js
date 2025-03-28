export class JSONC {
  static parse(jsonc_string) {
    return JSON.parse(this.stripComments(jsonc_string));
  }

  static stripComments(jsonc_string) {
    return jsonc_string.split(/[\r\n]+/g).map(line => line.replace(/\s+\/\/.*$/, '')).join('\n').replace(/\/\*[\s\S]*\*\//g, '');
  }
}
