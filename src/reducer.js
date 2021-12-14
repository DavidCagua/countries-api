export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_COUNTRY_BY_NAME": {
      let list = [];
      if (state.filterByRegion !== "") {
        list = state.countryList.filter(
          (country) => country.region === state.filterByRegion
        );
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.flag = "byName";
      return { ...state, countryListByName, filterByName: action.payload };
    }
    case "FILTER_BY_REGION": {
      let list = [];
      const { regionSelected } = action.payload;

      if (regionSelected === "") {
        state.flag = "";
        return {
          ...state,
          countryFilteredByRegion: [],
          filterByRegion: "",
        };
      }
      if (state.countryListByName.length > 0) {
        list = state.countryList.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(state.filterByName.toLowerCase())
        );
      } else {
        list = state.countryList;
      }
      const countryFilteredByRegion = list.filter(
        (country) => country.region === regionSelected
      );
      state.flag = "byRegion";
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
