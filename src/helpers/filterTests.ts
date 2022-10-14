





export const filterTest = (
  testName: string,
  description: string,
  email: string,
  searchParams: string
) => {
  return (
    testName.includes(searchParams) ||
    description.includes(searchParams) ||
    email.includes(searchParams)
  );
};
