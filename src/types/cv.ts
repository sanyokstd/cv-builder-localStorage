interface ICv {
  fullName: string,
  jobTitle: string,
  contacts: Icontact[]
}

interface Icontact {
  name: string,
  text: string,
  link?: string,
}