// Appended after model.js and import.js in the self-contained Hermes prompt.
(function(){
  const fs=require('node:fs'),path=require('node:path'),args=process.argv.slice(2),Import=module.exports;
  function main(){
    if(args.length!==5||args[1]!=='--contract'||args[3]!=='--output')throw Error('Uso: node validar-ecf.cjs rascunho.json --contract contrato-ecf.json --output diagnostico-ecf.json');
    const [input,,contract,,output]=args;
    if(path.resolve(output)===path.resolve(input)||path.resolve(output)===path.resolve(contract))throw Error('Use um arquivo de saída novo, diferente da entrada e do contrato.');
    for(const file of [input,contract])if(fs.statSync(file).size>200000)throw Error('Use resumos de até 200 KB.');
    const expected=Import.read(fs.readFileSync(contract,'utf8')).data;
    const result=Import.read(fs.readFileSync(input,'utf8'),expected);
    fs.writeFileSync(output,JSON.stringify(result.data,null,2)+'\n',{flag:'wx',mode:0o600});
    console.log(JSON.stringify({contract:Import.REVISION,result:result.audit.complete?'complete':'partial',measured:result.audit.measured,total:9,missing:result.audit.missing.map(x=>x.path),limited:result.audit.limited.map(x=>x.path)},null,2));
    process.exitCode=result.audit.complete?0:2;
  }
  try{main();}catch(error){
    // Do not echo filesystem paths or file contents in OS errors.
    console.error(error.code?'Falha de arquivo: '+error.code+'. Confira os caminhos e use uma saída que ainda não existe.':error.message);
    process.exitCode=1;
  }
})();
