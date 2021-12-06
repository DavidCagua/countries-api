export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_COUNTRY_BY_NAME": {
      let countryFilteredByRegion = [];
      let list;
      if (state.filterByRegion !== "") {
        list = state.countryFilteredByRegion;
        if (action.payload === "") {
          list = state.countryList;
          countryFilteredByRegion = list.filter(
            (country) => country.region === state.filterByRegion
          );
          return {
            ...state,
            countryListByName: list,
            countryFilteredByRegion,
          };
        }
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    case "FILTER_BY_REGION": {
      const { regionSelected } = action.payload;
      let countryFilteredByRegion = [];
      if (regionSelected === "") {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }
      if (state.countryListByName) {
        countryFilteredByRegion = state.countryListByName.filter(
          (country) => country.region === regionSelected
        );
      } else {
        countryFilteredByRegion = state.countryList.filter(
          (country) => country.region === regionSelected
        );
      }
      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    }
    default:
      return state;
  }
}
