import { IAddress } from "../interfaces/IAddress";
import { maskPostalCode } from "./masks";

type TShowOptions = Partial<Record<keyof Omit<IAddress, "_id">, boolean>>;

export function formatAddressLine(
  address: IAddress,
  showOptions?: TShowOptions
): string {
  if (!address?.street) return "";

  return `${!showOptions?.name || !address.name ? "" : address.name}${
    !showOptions?.name || !address.name
      ? address.street
      : ` - ${address.street}`
  }${address.number ? `, ${address.number}` : ""}${
    address.neighborhood ? ` - ${address.neighborhood}` : ""
  }${!showOptions?.city || !address.city ? "" : `, ${address.city}`}${
    !showOptions?.state || !address.state ? "" : `- ${address.state}`
  }${
    !showOptions?.postalCode || !address.postalCode
      ? ""
      : `, ${maskPostalCode(address.postalCode)}`
  }`;
}
