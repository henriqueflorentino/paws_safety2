const ComponenteLogin = {
    template: `
        <div class="componente">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <input type="text" v-model="username" placeholder="Usuário" required />
                <input type="password" v-model="password" placeholder="Senha" required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    `,
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const response = await fetch('https://paws-safety2.vercel.app/login', { // Alterado para o URL do Vercel
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.username, password: this.password })
            });
            if (response.ok) {
                alert('Login realizado com sucesso!');
                window.location.href = '/site/home.html'; // Redireciona para a página home após o login
            } else {
                alert('Usuário ou senha incorretos');
            }
        }
    }
};

const ComponenteSignIn = {
    template: `
        <div class="componente">
            <h1>Cadastre-se</h1>
            <form @submit.prevent="register">
                <input type="text" v-model="username" placeholder="Usuário" required />
                <input type="password" v-model="password" placeholder="Senha" required />
                <input type="password" v-model="confirmPassword" placeholder="Confirme a senha" required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `,
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                alert('As senhas não coincidem');
                return;
            }

            const response = await fetch('https://paws-safety2.vercel.app/register', { // Alterado para o URL do Vercel
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.username, password: this.password })
            });
            if (response.ok) {
                alert('Usuário registrado com sucesso!');
                this.$root.alterarComponentes(); // Redireciona para a página de login após o registro
            } else {
                alert('Erro ao registrar usuário');
            }
        }
    }
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
        },
        irParaHome() {
            window.location.href = "/site/home.html"; // Redireciona para a página home
        }
    },
    components: {
        ComponenteLogin,
        ComponenteSignIn
    }
}).mount("#app");
