export function getId(data: {id?: string; _id?: string}): string {
  return (data._id ? data._id : data.id) as string;
}
