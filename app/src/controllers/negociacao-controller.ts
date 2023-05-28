import { domInject } from "../decorators/domInject.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logarTempoExecucao.js";
import { DiaDaSemana } from "../enums/diasDaSemana.js";
import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
    @logarTempoExecucao(true)
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são permitidas')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparForm();
    }

    importarDados():void {
        fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(), 
                    dadoDeHoje.vezes, 
                    dadoDeHoje.montante
                )
            });
        })
        .then(negociaosDeHoje => {
            for(let negociacao of negociaosDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        })
        .catch(e => console.log(e));
    }


    private diaUtil(data: Date): boolean {
        return data.getDay() > DiaDaSemana.DOMINGO 
        && data.getDay() < DiaDaSemana.SABADO
    }

    private limparForm(): void {
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}