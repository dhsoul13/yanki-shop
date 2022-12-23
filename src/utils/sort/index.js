export const sort = async ({ mas = [], param = {} }) => {
  const obj = Object.fromEntries(param);

  let newMas = mas;

  if (obj?.type) {
    newMas = newMas.filter((elem) => {
      return elem.filter.join(',').includes(obj.type);
    });
  }

  if (obj?.max || obj?.sortMaxMin || obj?.size?.length) {
    newMas = newMas.filter((el) => {
      let mas = [];
      if (obj.min && obj.max) {
        mas = [
          ...mas,
          el.price >= Number(obj.min) && el.price <= Number(obj.max),
        ];
      }

      if (obj.size) {
        mas = [
          ...mas,
          Boolean(
            el.size.filter((elem) => {
              return obj.size.includes(elem);
            }).length
          ),
        ];
      }

      if (!obj.size) {
        return mas.filter((elem) => elem).length === 1 ? true : false;
      }
      return mas.filter((elem) => elem).length === 2 ? true : false;
    });
  }

  if (obj?.sortMaxMin === 'max') {
    return newMas.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (obj?.sortMaxMin === 'min') {
    return newMas.sort((a, b) => {
      return a.price - b.price;
    });
  } else {
    return newMas;
  }
};
