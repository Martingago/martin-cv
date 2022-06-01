//  Transforma timeStamp en fecha visible para el usuario

 export const getFecha = (timestamp) => {
    if (
      !timestamp ||
      typeof timestamp.toDate !== "function"
    ) {
      return "";
    } else {
      const date = new Date(timestamp.toDate());
      return `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
    }
  }