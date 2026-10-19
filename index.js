// Aurora web (demo)
function greet(name) {
  return `Hello, ${name}, from aurora-web`;
}
function health() {
  return { status: 'ok', service: 'aurora-web' };
}
module.exports = { greet, health };
