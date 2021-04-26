import { Container } from './styles';

export function Help() {
  return (
    <Container>
      <header>
        <img src="/images/dogHappy.png" alt="Dog happy"/>

        <aside>
          <h1>
            😻 Nos ajudem a continuarem nos resgatando 🐕
          </h1>
          <p>Se você doar qualquer valor para a instituição que cuida da gente, vamos continuar sendo resgatados, e eu vou poder ter uma casinha e um dono que me ame pra chamar de meu.</p>
        </aside>
      </header>
      <main>
        <h1>Nossas contas dísponiveis para doações</h1>
        <section>
          <div className="card">
            <img src="/images/nubank.svg" alt="Bank"/>
            <span>Agência 0001</span>
            <span>Conta 56485-6</span>
            <span>PIX: 012563</span>
          </div>
          <div className="card">
            <img src="/images/nubank.svg" alt="Bank"/>
            <span>Agência 0001</span>
            <span>Conta 56485-6</span>
            <span>PIX: 012563</span>
          </div>
          <div className="card">
            <img src="/images/nubank.svg" alt="Bank"/>
            <span>Agência 0001</span>
            <span>Conta 56485-6</span>
            <span>PIX: 012563</span>
          </div>
          <div className="card">
            <img src="/images/nubank.svg" alt="Bank"/>
            <span>Agência 0001</span>
            <span>Conta 56485-6</span>
            <span>PIX: 012563</span>
          </div>
        </section>
      </main>
    </Container>
  );
};
