import Produto from '../models/confiProd.js';

export const home = async (req, res) =>{
}
      


export const form = async (req, res) => {

    if (!req.body.email || !req.body.nome || !req.body.telefone ) {
        return res.status(500).json('Erro ao salvar');
    }
        try {
            await Produto.create({
                email: req.body.email,
                nome: req.body.nome,
                telefone: req.body.telefone,
                comomeconheceu: req.body.meconheceu
            });
    
            res.send('Obrigado')
        } catch (error) {
            res.status(400).send('Erro interno ao enviar.' + error);
        }

}
