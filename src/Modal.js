import React, { useState } from "react";

const Modal = () => {
  const [pochAdr, setPochAdr] = useState(false);
  const [open, setOpen] = useState(true);
  console.log(open);
  const initialState = {
    uid: "",
    case_id: "",
    plaintiff: {
      birthday: "",
      lastname: "",
      name: "",
      surname: "",
      phone: "",
      reg_address: "",
      res_address: "",
      type: 0,
    },
    defendant: {
      inn: "",
      ogrn: "",
      company: "",
      legal_address: "",
      mailing_address: "",
      kpp: "",
      pc: "",
      bank: "",
      bic: "",
      kc: "",
      type: 0,
    },
    start: "string",
    end: "string",
    area_id: 2,
  };
  const [data, setData] = useState(initialState);
  console.log(data);
  return (
    <div onClick={() => setOpen(false)}>
      <section
        className={open ? "modal open" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <header>Создать дело</header>
        <div className="top-flex">
          <div className="left-top">
            <div>
              <label htmlFor="uid">УИД</label>
              <input
                onChange={(e) => setData({ ...data, uid: e.target.value })}
                required
                type="number"
                name="uid"
              />
            </div>
            <div>
              <label htmlFor="number">Номер</label>
              <input
                onChange={(e) => setData({ ...data, case_id: e.target.value })}
                required
                type="number"
                name="number"
              />
            </div>
          </div>
          <div className="right-top">
            <label htmlFor="date-today">Дата:</label>
            <input
              onChange={(e) =>
                setData({
                  ...data,
                  plaintiff: {
                    ...data.plaintiff,
                    birthday: e.target.value,
                  },
                })
              }
              required
              type="number"
              name="date-today"
            />
          </div>
        </div>
        <main>
          <div className="col">
            <div className="istec">
              <div>
                <label htmlFor="urlico">
                  <strong>Истец:</strong>
                </label>
                <div className="checkbox-x">
                  <input
                    onChange={(e) =>
                      setData({
                        ...data,
                        plaintiff: {
                          ...data.plaintiff,
                          type: e.target.value,
                        },
                      })
                    }
                    type="checkbox"
                    name="urlico"
                    value="1"
                  />
                  <label style={{ marginLeft: "1rem" }} htmlFor="urlico">
                    Юридическое лицо
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="secondName">Фамилия</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        lastname: e.target.value,
                      },
                    })
                  }
                  required
                  type="text"
                  name="secondName"
                />
              </div>
              <div>
                <label htmlFor="Name">Имя</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        name: e.target.value,
                      },
                    })
                  }
                  required
                  type="text"
                  name="Name"
                />
              </div>
              <div>
                <label htmlFor="otch">Отчество</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        surname: e.target.value,
                      },
                    })
                  }
                  required
                  type="text"
                  name="otch"
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth">Дата рождения</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        birthday: e.target.value,
                      },
                    })
                  }
                  required
                  type="number"
                  name="dateOfBirth"
                />
              </div>
              <div>
                <label htmlFor="address">Адрес регистрации</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        reg_address: e.target.value,
                      },
                    })
                  }
                  required
                  type="text"
                  name="address"
                />
              </div>
              <div>
                <label htmlFor="address-real">Адрес проживания</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        res_address: e.target.value,
                      },
                    })
                  }
                  required
                  type="text"
                  name="address-real"
                />
              </div>
              <div>
                <label htmlFor="tel-number">Номер телефона</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      plaintiff: {
                        ...data.plaintiff,
                        phone: e.target.value,
                      },
                    })
                  }
                  required
                  type="number"
                  name="tel-number"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <label htmlFor="urlico">
                <strong>Ответчик:</strong>
              </label>
              <div className="checkbox-x">
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      defendant: {
                        ...data.defendant,
                        type: e.target.value,
                      },
                    })
                  }
                  type="checkbox"
                  name="otv-urlico"
                  value="1"
                />
                <label style={{ marginLeft: "1rem" }} htmlFor="urlico">
                  Юридическое лицо
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="inn">ИНН</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      inn: e.target.value,
                    },
                  })
                }
                type="number"
                name="inn"
              />
            </div>
            <div>
              <label htmlFor="ogrn">ОГРН</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      ogrn: e.target.value,
                    },
                  })
                }
                type="number"
                name="ogrn"
              />
            </div>
            <div>
              <label htmlFor="name-comp">Название компании</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      company: e.target.value,
                    },
                  })
                }
                type="text"
                name="name-comp"
              />
            </div>
            <div>
              <label htmlFor="ur-address">Юридический адрес</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      legal_address: e.target.value,
                    },
                  })
                }
                type="text"
                name="ur-address"
              />
            </div>
            <div>
              <label style={{ color: "white" }} htmlFor="pocht-ur-address">
                Empty
              </label>
              <div className="checkbox-x">
                <input
                  onChange={() => setPochAdr(!pochAdr)}
                  type="checkbox"
                  name="pocht-ur-address"
                />
                <label style={{ marginLeft: "1rem" }} htmlFor="ur-address">
                  Почтовый адрес совпадает с юридическим
                </label>
              </div>
            </div>
            {!pochAdr && (
              <div>
                <label htmlFor="pocht-address">Почтовый адрес</label>
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      defendant: {
                        ...data.defendant,
                        mailing_address: e.target.value,
                      },
                    })
                  }
                  type="text"
                  name="pocht-address"
                />
              </div>
            )}
            <div>
              <label htmlFor="kpp">КПП</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      kpp: e.target.value,
                    },
                  })
                }
                type="number"
                name="kpp"
              />
            </div>
            <div>
              <label htmlFor="rs">Р/c</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      pc: e.target.value,
                    },
                  })
                }
                type="number"
                name="rs"
              />
            </div>
            <div>
              <label htmlFor="bank">Банк</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      bank: e.target.value,
                    },
                  })
                }
                type="number"
                name="bank"
              />
            </div>
            <div>
              <label htmlFor="bik">БИК</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      bic: e.target.value,
                    },
                  })
                }
                type="number"
                name="bik"
              />
            </div>
            <div>
              <label htmlFor="ks">К/c</label>
              <input
                onChange={(e) =>
                  setData({
                    ...data,
                    defendant: {
                      ...data.defendant,
                      kc: e.target.value,
                    },
                  })
                }
                type="number"
                name="ks"
              />
            </div>
            <div className="buttons">
              <button onClick={() => setOpen(false)}>Отмена</button>
              <button>Создать</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Modal;
