const world = 'world';

export function hello(world: string = 'world'): string {
  return `Hello you ${world}! `;
}