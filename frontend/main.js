import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/Login'
import Contatos from './modules/Contatos'

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')
login.init()
cadastro.init()

const novoContato = new Contatos('.form-registro')
const editarContato = new Contatos('.form-edit')
novoContato.init()
editarContato.init()

