#!/usr/bin/env node

/**
 * GulfOfMexico Compiler
 * The most cursed compiler ever created
 * Tries its best to compile cursed syntax (but might fail)
 */

const fs = require('fs');
const path = require('path');

class CursedCompiler {
   constructor() {
      this.variables = new Map();
      this.functions = new Map();
      this.output = [];
      this.indentLevel = 0;
      this.maybeMode = false;
      this.kindaMode = false;
   }

   compile(code) {
      this.output = [];
      this.output.push('// Compiled from GulfOfMexico (cursed mode)');
      this.output.push('// This might work, probably, maybe');
      this.output.push('');
      
      const lines = code.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
         const line = lines[i].trim();
         if (!line || line.startsWith('//')) continue;
         
         try {
            this.compileLine(line);
         } catch (error) {
            this.output.push(`// ERROR: ${error.message} (but continuing anyway because cursed)`);
         }
      }
      
      return this.output.join('\n');
   }

   compileLine(line) {
      // Remove exclamation marks and question marks (they're just for show)
      line = line.replace(/[!?]+$/, '');
      
      // Handle closing braces first
      if (line === '}' || line.trim() === '}') {
         this.output.push('}');
         if (this.indentLevel > 0) this.indentLevel--;
         return;
      }
      
      // Handle cursed syntax - check maybe() first before kinda const
      if (line.includes('maybe(') || line.includes('probably(') || line.includes('approximately(') || line.includes('sortOf(') || line.includes('kinda(')) {
         this.compileMaybeValue(line);
         return;
      }
      
      // Handle approximate operators
      if (line.includes('+?') || line.includes('-?') || line.includes('*?') || line.includes('/?') || line.includes('==?')) {
         this.compileApproximateOperator(line);
         return;
      }
      
      if (line.includes('kinda const') || line.includes('const-ish') || line.includes('almost const')) {
         this.compileKindaConst(line);
         return;
      }
      
      if (line.includes('kinda funct') || line.includes('function-ish') || line.includes('almost funct')) {
         this.compileKindaFunct(line);
         return;
      }
      
      // Regular const const
      if (line.match(/const\s+const\s+\w+\s*=/)) {
         this.compileConstConst(line);
         return;
      }
      
      // Regular const var
      if (line.match(/const\s+var\s+\w+\s*=/)) {
         this.compileConstVar(line);
         return;
      }
      
      // Regular var const
      if (line.match(/var\s+const\s+\w+\s*=/)) {
         this.compileVarConst(line);
         return;
      }
      
      // Regular var var
      if (line.match(/var\s+var\s+\w+\s*=/)) {
         this.compileVarVar(line);
         return;
      }
      
      // Functions
      if (line.match(/funct\s+\w+\s*\(/)) {
         this.compileFunction(line);
         return;
      }
      
      // When statements
      if (line.startsWith('when')) {
         this.compileWhen(line);
         return;
      }
      
      // Print statements
      if (line.startsWith('print(')) {
         this.compilePrint(line);
         return;
      }
      
      // Everything else - just try to make it work
      this.output.push(`// Cursed line: ${line}`);
      this.output.push(`try { ${this.translateToJS(line)} } catch(e) { console.log("Maybe this works?") }`);
   }

   compileKindaConst(line) {
      const match = line.match(/(?:kinda|const-ish|almost)\s+const\s+(\w+)\s*=\s*(.+)/);
      if (match) {
         const [, name, value] = match;
         this.output.push(`// Kinda const (might be constant, maybe)`);
         this.output.push(`let ${name} = ${this.translateValue(value)};`);
         this.output.push(`// ${name} is sort of constant, but not really`);
      }
   }

   compileKindaFunct(line) {
      const match = line.match(/(?:kinda|function-ish|almost)\s+funct\s+(\w+)\s*\(([^)]*)\)\s*=>\s*(.+)/);
      if (match) {
         const [, name, params, body] = match;
         this.output.push(`// Kinda function (acts like a function, mostly)`);
         this.output.push(`function ${name}(${params}) {`);
         this.output.push(`   // Might return this, maybe`);
         this.output.push(`   return ${this.translateToJS(body)};`);
         this.output.push(`}`);
      }
   }

   compileMaybeValue(line) {
      // Match with optional const/var declarations - be more flexible
      const match = line.match(/(?:kinda\s+)?(?:const\s+const|const\s+var|var\s+const|var\s+var|let|const)?\s*(\w+)\s*=\s*(?:maybe|probably|approximately|sortOf|kinda)\((.+)\)/);
      if (match) {
         const [, name, value] = match;
         const translatedValue = this.translateValue(value);
         const isConst = line.includes('const const') || line.includes('kinda const');
         const declaration = isConst ? 'const' : 'let';
         this.output.push(`// Maybe value (uncertain)`);
         this.output.push(`${declaration} ${name} = Math.random() > 0.5 ? ${translatedValue} : ${translatedValue} + (Math.random() - 0.5) * 0.1;`);
      } else {
         // Try without declaration prefix
         const simpleMatch = line.match(/(\w+)\s*=\s*(?:maybe|probably|approximately|sortOf|kinda)\((.+)\)/);
         if (simpleMatch) {
            const [, name, value] = simpleMatch;
            const translatedValue = this.translateValue(value);
            this.output.push(`// Maybe value (uncertain)`);
            this.output.push(`let ${name} = Math.random() > 0.5 ? ${translatedValue} : ${translatedValue} + (Math.random() - 0.5) * 0.1;`);
         }
      }
   }

   compileApproximateOperator(line) {
      // Handle assignment with approximate operators
      const assignMatch = line.match(/(?:const\s+const|const\s+var|var\s+const|var\s+var|let|const)\s+(\w+)\s*=\s*(.+)/);
      if (assignMatch) {
         const [, varName, expr] = assignMatch;
         let result = expr.trim();
         
         // Replace approximate operators (need to escape ?)
         result = result.replace(/(\d+|\w+)\s*\+\?\s*(\d+|\w+)/g, (match, a, b) => {
            return `(${a} + ${b} + (Math.random() - 0.5) * 0.1)`;
         });
         result = result.replace(/(\d+|\w+)\s*-\?\s*(\d+|\w+)/g, (match, a, b) => {
            return `(${a} - ${b} + (Math.random() - 0.5) * 0.1)`;
         });
         result = result.replace(/(\d+|\w+)\s*\*\?\s*(\d+|\w+)/g, (match, a, b) => {
            return `(${a} * ${b} * (1 + (Math.random() - 0.5) * 0.1))`;
         });
         result = result.replace(/(\d+|\w+)\s*\/\?\s*(\d+|\w+)/g, (match, a, b) => {
            return `(${a} / ${b} * (1 + (Math.random() - 0.5) * 0.1))`;
         });
         
         // Check if it's const const or something else
         const isConst = line.includes('const const');
         const declaration = isConst ? 'const' : 'let';
         
         this.output.push(`// Approximate operator (might be accurate, maybe)`);
         this.output.push(`${declaration} ${varName} = ${result};`);
      } else {
         this.output.push(`// Approximate operator line (trying best)`);
         this.output.push(this.translateToJS(line));
      }
   }

   compileConstConst(line) {
      const match = line.match(/const\s+const\s+(\w+)\s*=\s*(.+)/);
      if (match) {
         const [, name, value] = match;
         this.output.push(`const ${name} = ${this.translateValue(value)};`);
         this.variables.set(name, 'const');
      }
   }

   compileConstVar(line) {
      const match = line.match(/const\s+var\s+(\w+)\s*=\s*(.+)/);
      if (match) {
         const [, name, value] = match;
         this.output.push(`let ${name} = ${this.translateValue(value)};`);
         this.variables.set(name, 'const-var');
      }
   }

   compileVarConst(line) {
      const match = line.match(/var\s+const\s+(\w+)\s*=\s*(.+)/);
      if (match) {
         const [, name, value] = match;
         this.output.push(`let ${name} = ${this.translateValue(value)};`);
         this.variables.set(name, 'var-const');
      }
   }

   compileVarVar(line) {
      const match = line.match(/var\s+var\s+(\w+)\s*=\s*(.+)/);
      if (match) {
         const [, name, value] = match;
         this.output.push(`let ${name} = ${this.translateValue(value)};`);
         this.variables.set(name, 'var-var');
      }
   }

   compileFunction(line) {
      const match = line.match(/funct\s+(\w+)\s*\(([^)]*)\)\s*=>\s*(.+)/);
      if (match) {
         const [, name, params, body] = match;
         this.output.push(`function ${name}(${params}) {`);
         this.output.push(`   return ${this.translateToJS(body)};`);
         this.output.push(`}`);
         this.functions.set(name, { params, body });
      }
   }

   compileWhen(line) {
      const match = line.match(/when\s+(.+)\s*\{/);
      if (match) {
         const condition = match[1];
         this.output.push(`if (${this.translateCondition(condition)}) {`);
         this.indentLevel++;
      } else if (line === '}') {
         this.output.push('}');
         if (this.indentLevel > 0) this.indentLevel--;
      }
   }

   compilePrint(line) {
      const match = line.match(/print\((.+)\)/);
      if (match) {
         const value = match[1];
         this.output.push(`console.log(${this.translateValue(value)});`);
      }
   }

   translateValue(value) {
      value = value.trim();
      
      // String literals
      if (value.startsWith('"') || value.startsWith("'")) {
         return value;
      }
      
      // Numbers
      if (/^\d+$/.test(value)) {
         return value;
      }
      
      // Variables
      if (/^\w+$/.test(value)) {
         return value;
      }
      
      // Complex expressions - just try to translate
      return this.translateToJS(value);
   }

   translateCondition(condition) {
      // Replace = with == for comparisons
      condition = condition.replace(/(\w+)\s*=\s*(\w+)/g, '$1 == $2');
      // Replace ==? with approximate equality
      condition = condition.replace(/(\w+)\s*==\?\s*(\w+)/g, 'Math.abs($1 - $2) < 0.1');
      return this.translateToJS(condition);
   }

   translateToJS(code) {
      // Basic translation - remove GulfOfMexico specific syntax
      code = code.replace(/!/g, '');
      code = code.replace(/\?/g, '');
      return code;
   }
}

// Main compiler function
function compileGulfOfMexico(inputFile, outputFile) {
   try {
      const code = fs.readFileSync(inputFile, 'utf8');
      const compiler = new CursedCompiler();
      const compiled = compiler.compile(code);
      
      fs.writeFileSync(outputFile, compiled, 'utf8');
      console.log(`✅ Compiled ${inputFile} to ${outputFile}`);
      console.log('⚠️  Warning: This might work, probably, maybe');
   } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      console.log('But continuing anyway because cursed...');
   }
}

// CLI
if (require.main === module) {
   const args = process.argv.slice(2);
   
   if (args.length === 0) {
      console.log('GulfOfMexico Cursed Compiler');
      console.log('Usage: node compiler.js <input.db> [output.js]');
      console.log('');
      console.log('Example:');
      console.log('  node compiler.js hello.db hello.js');
      process.exit(1);
   }
   
   const inputFile = args[0];
   const outputFile = args[1] || inputFile.replace(/\.db$/, '.js');
   
   if (!fs.existsSync(inputFile)) {
      console.error(`❌ File not found: ${inputFile}`);
      process.exit(1);
   }
   
   compileGulfOfMexico(inputFile, outputFile);
}

module.exports = { CursedCompiler, compileGulfOfMexico };

