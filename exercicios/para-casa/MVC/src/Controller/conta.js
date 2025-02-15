const create = () => {}
const index = () => {}
const update = (req, res) => {
    const IDconta = req.params.id
    const ValorDoSaque = req.body
    const contaExistente = listaClientes.find((cliente) => cliente.id == IDconta)
    const valor = ValorDoSaque
    const infoContas = contaExistente.conta
    if (contaExistente) {
        if (infoContas.saldo >= valor.saque) {
            infoContas.saldo = infoContas.saldo - valor.saque
            contaExistente.conta = infoContas
        } else {
            return res.status(404).json({
                message: "Conta não tem saldo suficiente"
            })
        }
        const contaAtualizada = {
            ...contaExistente,
            ...ValorDoSaque,
        }

        return res.status(200).json(contaAtualizada)
    }
    return res.status(404).json({
        message: "Conta não encontrada"
    })
}
const destroy = ()=> {}

module.exports = {
    create,
    index,
    update,
    destroy
}