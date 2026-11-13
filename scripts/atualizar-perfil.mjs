import { writeFile } from 'node:fs/promises';
import { fetchPublicProjects, profileMarkdown } from './github.mjs';

const { projects, incompleteLanguages } = await fetchPublicProjects();
if (incompleteLanguages) throw new Error('O GitHub não retornou todas as linguagens. O README anterior foi preservado.');
await writeFile(new URL('../README.md', import.meta.url), profileMarkdown(projects, new Date().toISOString()));
console.log(`Perfil atualizado com ${projects.length} repositórios públicos.`);
