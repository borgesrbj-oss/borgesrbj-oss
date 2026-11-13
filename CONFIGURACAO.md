# Atualização do perfil

Este diretório deve ser publicado como repositório público `borgesrbj-oss/borgesrbj-oss`, na branch `main`, para que o `README.md` apareça no perfil.

O GitHub Actions consulta apenas dados públicos diariamente às 09h35 UTC (06h35 em São Paulo, sujeito à fila do serviço). A execução também pode ser iniciada manualmente. Não é necessário fornecer token pessoal: o workflow usa a credencial automática do próprio GitHub com permissão para atualizar este repositório.

Para atualizar localmente com Node.js 22 ou superior:

```powershell
node scripts/atualizar-perfil.mjs
```

O código consulta a API com paginação e coleta nome, descrição, linguagens, estrelas, link, demo e data de atualização. Se a coleta ficar incompleta, o README existente é preservado. Repositórios privados não são incluídos. O nome Ricardo vem da identidade Git local; a conta pública não informa nome, biografia ou endereço de contato.

Não substitua um repositório de perfil existente sem antes revisar o conteúdo e obter autorização.
