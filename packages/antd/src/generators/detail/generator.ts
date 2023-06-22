import { Tree } from '@nrwl/devkit';
import { DetailViewGeneratorSchema } from './schema';

export default async function (tree: Tree, options: DetailViewGeneratorSchema) {
  const data = tree.read(`${options.name}`);
  const s = data.toString('utf-8');
  const match = /(class|interface) (\w+)/.exec(s);
  if (!match) return;

  const fields = s.split('\n').filter((line) => /\w+\??: \w+.*?;/.test(line));
  const conTipos: Array<{ title: string; dataIndex: string; type: string }> =
    fields.map((line) => {
      const [name, type] = line.split(': ');
      return { title: name.trim(), dataIndex: name.trim(), type: type.trim() };
    });
  const clase = match[2];
  console.log(conTipos);

  console.log(`
  <Descriptions title="${clase}">
    ${conTipos
      .map(({ title, dataIndex, type }) => {
        return `<Descriptions.Item label="${cap(
          title
        )}">{${clase.toLocaleLowerCase()}.${dataIndex}}</Descriptions.Item>`;
      })
      .join('\n')}
      </Descriptions>
  `);
}

function cap(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}
