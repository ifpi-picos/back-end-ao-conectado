import rotasDePagamentos from './rotas/rotasDePagamentos.js'
import rotasDeAtentimentos from './rotas/rotasDeAtendimentos.js'
import rotasDeConsultasrealizadas from './rotas/rotasDeConsultasrealizadas.js'
import rotasDeConsultasagendadas from './rotas/rotasDeConsultasagendadas.js'
import rotasDeChat from './rotas/rotasDeChat.js'
import rotasDeConfiguraçoes from './rotas/rotasDeConfiguraçoes.js'


const app = express ();
app.use(logger('dev'));

app.use('pagamentos', rotasDePagamentos);
app.use('atendimentos', rotasDeAtentimentos);
app.use('consultasrealizadas', rotasDeConsultasrealizadas);
app.use('consultasagendadas', rotasDeConsultasagendadas);
app.use('chat', rotasDeChat);
app.use('configuraçoes', rotasDeConfiguraçoes);



app.listen(3000, () => {
  console.log('Server running on port 3000');
  });
