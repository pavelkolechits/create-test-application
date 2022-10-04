





export const filterTest = (
  testName: string,
  description: string,
  email: string,
  searchParams: string
) => {
    console.log(testName, description, email)
  return (
    testName.includes(searchParams) ||
    description.includes(searchParams) ||
    email.includes(searchParams)
  );
};
