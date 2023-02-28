import { useRouter } from "next/router"
import { useState } from "react"
import { Layout } from "../../layout"

export const ProductRegistration: React.FC = () => {
    // const service = useProdutoService()
    const [ sku, setSku ] = useState<string>('')
    const [ preco, setPreco ] = useState<string>('')
    const [ nome, setNome ] = useState<string>('')
    const [ descricao, setDescricao ] = useState<string>('')   
    const [ id, setId ] = useState<string>('')
    const [ cadastro, setCadastro ] = useState<string>('')
    // const [ messages, setMessages ] = useState<Array<Alert>>([])
    // const [ errors, setErrors ] = useState<FormErros>({})
    const router = useRouter();
    const { id: queryId  } = router.query;
    
    return (
        <Layout titule="Produtos" >
            {id &&
                <div className="columns">
                    <Input label="Código:"
                        columnClasses="is-half"
                        value={id}
                        id="inputId"
                        disabled={true}
                    />

                    <Input label="Data Cadastro:"
                        columnClasses="is-half"
                        value={cadastro}
                        id="inputDataCadastro"
                        disabled
                    />
                </div>
            }

            <div className="columns">
                <Input label="SKU: *"
                    columnClasses="is-half"
                    onChange={e => setSku(e.target.value)}
                    value={sku}
                    id="inputSku"
                    placeholder="Digite o SKU do produto"
                    error={errors.sku}
                />

                <InputMoney label="Preço: *"
                    columnClasses="is-half"
                    onChange={e => setPreco(e.target.value)}
                    value={preco}
                    id="inputPreco"
                    placeholder="Digite o Preço do produto"
                    maxLength={16}
                    error={errors.preco}
                />
            </div>

            <div className="columns">
                <Input label="Nome: *"
                    columnClasses="is-full"
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                    id="inputNome"
                    placeholder="Digite o Nome do produto"
                    error={errors.nome}
                />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDesc">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea"
                            id="inputDesc" value={descricao}
                            onChange={event => setDescricao(event.target.value)}
                            placeholder="Digite a Descrição detalhada do produto" />
                        {errors.descricao &&
                            <p className="help is-danger">{errors.descricao}</p>
                        }
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control is-link">
                    <button onClick={submit} className="button is-success">
                        {id ? "Atualizar" : "Salvar"}
                    </button>
                </div>
                <div className="control">
                    <Link href="/consultas/produtos">
                        <button className="button">Voltar</button>
                    </Link>
                </div>
            </div>

        </Layout>
    )
}