# MotoJá — como usar (versão gratuita)

## O que já está pronto
- **Banco de dados (Firebase Firestore)**: projeto `motoja-mototaxi`, dados em São Paulo, plano gratuito Spark (sem cartão). Já configurado dentro do `index.html`.
- **Mapa gratuito (OpenStreetMap)**: funciona sem chave e sem cartão.
  - Mapa: OpenStreetMap + CARTO
  - Busca de destino: Photon (komoot)
  - Endereço do ponto tocado: Nominatim (OpenStreetMap)
  - Rota, distância e tempo: OSRM

> Esses serviços públicos são gratuitos e pensados para uso leve: ótimos para testar e para começar. Se o app crescer muito, o ideal é migrar para um serviço pago ou próprio.

## Colocar no ar (grátis)
O app precisa estar num endereço `https://` (o GPS do celular só funciona assim). Opções gratuitas:
- **Netlify Drop**: <https://app.netlify.com/drop> → crie uma conta grátis (pode entrar com o Google) → arraste a pasta com o `index.html`.
- **Firebase Hosting** (mesmo projeto do banco): `npm install -g firebase-tools`, `firebase login`, `firebase init hosting` numa pasta com o `index.html` e `firebase deploy`.

## Usando
- **Empresas** (🏢): cadastre as empresas (tarifas próprias) e os pilotos (foto, nome, telefone, CNH e moto: marca, modelo, ano, cor e placa).
- **Piloto** (🏍️): o mototaxista escolhe o nome, fica online, libera o GPS e aceita corridas. Mande o link com `#piloto` no final para eles.
- **Passageiro** (🧍): GPS ou toque no mapa para a origem, busca do destino, escolhe a empresa e pede. Acompanha a moto no mapa com foto, moto, cor e placa do piloto.
- Teste sozinho: Empresas → **Criar dados de exemplo** → peça uma corrida → **🧪 Simular aceite**.

## Quer o visual do Google Maps depois?
Toque em ⚙️ e cole uma chave do Google Maps. A **Maps Demo Key** é gratuita e não pede cartão (tem limite diário): <https://mapsplatform.google.com/maps-demo-key/>. Sem chave, o app continua usando o OpenStreetMap.
