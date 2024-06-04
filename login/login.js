const ComponenteLogin = {
    template: `
        <div class="componente">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    `
};

const ComponenteSignIn = {
    template: `
        <div class="componente">
            <h1>Cadastre-se</h1>
            <form>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `
};

const { createApp } = Vue;

createApp({
    data() {
        return {
            componenteAtual: "ComponenteLogin",
            textoBotao: "Não tenho cadastro" 
        }
    },
    methods: {
        alterarComponentes() {
            if (this.componenteAtual === "ComponenteLogin") {
                this.componenteAtual = "ComponenteSignIn";
                this.textoBotao = "Já possuo cadastro";
            } else {
                this.componenteAtual = "ComponenteLogin";
                this.textoBotao = "Não tenho cadastro";
            }
        }
    },
    components: {
        ComponenteLogin,
        ComponenteSignIn
    }
}).mount("#app")