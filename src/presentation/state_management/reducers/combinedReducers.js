import { combineReducers } from "redux";
import {
  startMarkerHandler,
  endMarkerHandler,
  createLineStateHandler,
} from "./create-line-handler";
import {
  watchCurrentPosition,
  watchDirection,
  aSingleCurrentPosition,
  positionWatcherHandler,
  headingWatcherHandler,
  userCloseEnoughToStartHandler,
} from "./location-handler";
import {
  lineMarkersHandler,
  bannerHandler,
  selectedMarkerHandler,
  selectedLineDraftHandler,
  lineTitleHandler,
} from "./line-data-handlers";
import {
  difficultyHandler,
  finishedLineHandler,
  liveTrackingOnHandler,
  pathHandler,
} from "./live-line-recording-handler";
import {
  imagesHandler,
  mapIsLoadedHandler,
  exploreMapTypeHandler,
  onScreenHandler,
  menuVisibleHandler,
  recentSearchesHandler,
  searchResultsHandler,
  searchVisibleHandler,
  showHeadingOnHandler,
  timeDelayHandler,
  toolbarVisibleHandler,
  exploreMapViewRefHandler,
  createLineMapViewRefHandler,
  gpsLiveMapViewRefHandler,
  lineReviewMapViewRefHandler,
  mapViewRefHandler,
  exploreMapHeadingHandler,
  createLineMapTypeHandler,
  createMapHeadingHandler,
  loadingVisibleHandler,
  weatherDataHandler,
} from "./ui-handler";

export default combineReducers({
  weatherDataHandler,
  loadingVisibleHandler,
  createMapHeadingHandler,
  createLineMapTypeHandler,
  exploreMapHeadingHandler,
  mapViewRefHandler,
  exploreMapViewRefHandler,
  createLineMapViewRefHandler,
  gpsLiveMapViewRefHandler,
  lineReviewMapViewRefHandler,
  toolbarVisibleHandler,
  imagesHandler,
  mapIsLoadedHandler,
  showHeadingOnHandler,
  menuVisibleHandler,
  exploreMapTypeHandler,
  recentSearchesHandler,
  onScreenHandler,
  searchResultsHandler,
  timeDelayHandler,
  searchVisibleHandler,
  difficultyHandler,
  finishedLineHandler,
  liveTrackingOnHandler,
  userCloseEnoughToStartHandler,
  headingWatcherHandler,
  positionWatcherHandler,
  pathHandler,
  lineTitleHandler,
  selectedLineDraftHandler,
  selectedMarkerHandler,
  bannerHandler,
  lineMarkersHandler,
  createLineStateHandler,
  startMarkerHandler,
  endMarkerHandler,
  watchCurrentPosition,
  watchDirection,
  aSingleCurrentPosition,
});
