export const setPinStartingPoint = () => {
  return {
    type: "SETPINSTARTINGPOINT",
  };
};

export const setPinEndPoint = () => {
  return {
    type: "SETPINENDPOINT",
  };
};

export const resetPin = () => {
  return {
    type: "RESET",
  };
};

export const mapPressedForFirstPin = (event) => {
  return {
    newCoordinates: event,
    type: "MAPPRESSFORFIRSTPIN",
  };
};

export const mapPressedForSecondPin = (event) => {
  return {
    newCoordinates: event,
    type: "MAPPRESSFORSECONDPIN",
  };
};

export const currentPositionUpdate = (event) => {
  return {
    newCoordinates: event,
    type: "WATCHCURRENTPOSITION",
  };
};

export const updateCurrentPositionOnce = (coordinates) => {
  return {
    coordinates: coordinates,
    type: "GETCURRENTPOSITIONONCE",
  };
};

export const updateCurrentDirection = (event) => {
  return {
    newDirection: event,
    type: "WATCHDIRECTION",
  };
};

export const updatePath = (event) => {
  return {
    event: event,
    type: "UPDATEPATH",
  };
};

export const sendLineMarkers = (event) => {
  return {
    lineMarkers: event,
    type: "GETLINEMARKERS",
  };
};

export const openBanner = (event) => {
  return {
    event: event,
    type: "OPENBANNER",
  };
};

export const selectMarker = (event) => {
  return {
    event: event,
    type: "SELECTMARKER",
  };
};

export const resetMarker = (event) => {
  return {
    event: event,
    type: "RESETMARKER",
  };
};

export const selectLineDraft = (event) => {
  return {
    event: event,
    type: "SELECTLINEDRAFT",
  };
};

export const resetLineDraft = (event) => {
  return {
    event: event,
    type: "RESETLINEDRAFT",
  };
};

export const addLineTitle = (event) => {
  return {
    event: event,
    type: "ADDLINETITLE",
  };
};

export const setPositionWatcher = (event) => {
  return {
    event: event,
    type: "SETWATCHER",
  };
};

export const setHeadingWatcher = (event) => {
  return {
    event: event,
    type: "SETHEADINGWATCHER",
  };
};

export const userCloseEnoughToStartUpdate = (event) => {
  return {
    event: event,
    type: "UPDATEUSERTOSTART",
  };
};

export const liveTrackingUpdate = (event) => {
  return {
    event: event,
    type: "LIVEON",
  };
};

export const finishLineUpdate = (event) => {
  return {
    event: event,
    type: "FINISHEDLINE",
  };
};

export const difficultyUpdate = (event) => {
  return {
    event: event,
    type: "DIFFICULTY",
  };
};

export const searchVisibleUpdate = (event) => {
  return {
    event: event,
    type: "SEARCH",
  };
};

export const timeDelayUpdate = (event) => {
  return {
    event: event,
    type: "DELAY",
  };
};

export const searchResultsUpdate = (event) => {
  return {
    event: event,
    type: "SEARCHRESULTS",
  };
};

export const mapViewRefUpdate = (event) => {
  return {
    event: event,
    type: "MAPREF",
  };
};

export const recentSearchesUpdate = (event) => {
  return {
    event: event,
    type: "RECENTSEARCH",
  };
};
