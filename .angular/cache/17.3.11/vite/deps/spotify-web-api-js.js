import {
  __commonJS
} from "./chunk-RKN2ARKZ.js";

// node_modules/spotify-web-api-js/src/spotify-web-api.js
var require_spotify_web_api = __commonJS({
  "node_modules/spotify-web-api-js/src/spotify-web-api.js"(exports, module) {
    var SpotifyWebApi = function() {
      var _baseUri = "https://api.spotify.com/v1";
      var _accessToken = null;
      var _promiseImplementation = null;
      var WrapPromiseWithAbort = function(promise, onAbort) {
        promise.abort = onAbort;
        return promise;
      };
      var _promiseProvider = function(promiseFunction, onAbort) {
        var returnedPromise;
        if (_promiseImplementation !== null) {
          var deferred = _promiseImplementation.defer();
          promiseFunction(
            function(resolvedResult) {
              deferred.resolve(resolvedResult);
            },
            function(rejectedResult) {
              deferred.reject(rejectedResult);
            }
          );
          returnedPromise = deferred.promise;
        } else {
          if (window.Promise) {
            returnedPromise = new window.Promise(promiseFunction);
          }
        }
        if (returnedPromise) {
          return new WrapPromiseWithAbort(returnedPromise, onAbort);
        } else {
          return null;
        }
      };
      var _extend = function() {
        var args = Array.prototype.slice.call(arguments);
        var target = args[0];
        var objects = args.slice(1);
        target = target || {};
        objects.forEach(function(object) {
          for (var j in object) {
            if (object.hasOwnProperty(j)) {
              target[j] = object[j];
            }
          }
        });
        return target;
      };
      var _buildUrl = function(url, parameters) {
        var qs = "";
        for (var key in parameters) {
          if (parameters.hasOwnProperty(key)) {
            var value = parameters[key];
            qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
          }
        }
        if (qs.length > 0) {
          qs = qs.substring(0, qs.length - 1);
          url = url + "?" + qs;
        }
        return url;
      };
      var _performRequest = function(requestData, callback) {
        var req = new XMLHttpRequest();
        var promiseFunction = function(resolve, reject) {
          function success(data) {
            if (resolve) {
              resolve(data);
            }
            if (callback) {
              callback(null, data);
            }
          }
          function failure() {
            if (reject) {
              reject(req);
            }
            if (callback) {
              callback(req, null);
            }
          }
          var type = requestData.type || "GET";
          req.open(type, _buildUrl(requestData.url, requestData.params));
          if (_accessToken) {
            req.setRequestHeader("Authorization", "Bearer " + _accessToken);
          }
          req.onreadystatechange = function() {
            if (req.readyState === 4) {
              var data = null;
              try {
                data = req.responseText ? JSON.parse(req.responseText) : "";
              } catch (e) {
                console.error(e);
              }
              if (req.status >= 200 && req.status < 300) {
                success(data);
              } else {
                failure();
              }
            }
          };
          if (type === "GET") {
            req.send(null);
          } else {
            var postData = null;
            if (requestData.postData) {
              if (requestData.contentType === "image/jpeg") {
                postData = requestData.postData;
                req.setRequestHeader("Content-Type", requestData.contentType);
              } else {
                postData = JSON.stringify(requestData.postData);
                req.setRequestHeader("Content-Type", "application/json");
              }
            }
            req.send(postData);
          }
        };
        if (callback) {
          promiseFunction();
          return null;
        } else {
          return _promiseProvider(promiseFunction, function() {
            req.abort();
          });
        }
      };
      var _checkParamsAndPerformRequest = function(requestData, options, callback, optionsAlwaysExtendParams) {
        var opt = {};
        var cb = null;
        if (typeof options === "object") {
          opt = options;
          cb = callback;
        } else if (typeof options === "function") {
          cb = options;
        }
        var type = requestData.type || "GET";
        if (type !== "GET" && requestData.postData && !optionsAlwaysExtendParams) {
          requestData.postData = _extend(requestData.postData, opt);
        } else {
          requestData.params = _extend(requestData.params, opt);
        }
        return _performRequest(requestData, cb);
      };
      var Constr = function() {
      };
      Constr.prototype = {
        constructor: SpotifyWebApi
      };
      Constr.prototype.getGeneric = function(url, callback) {
        var requestData = {
          url
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.getMe = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMySavedTracks = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/tracks"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.addToMySavedTracks = function(trackIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/tracks",
          type: "PUT",
          postData: trackIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.removeFromMySavedTracks = function(trackIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/tracks",
          type: "DELETE",
          postData: trackIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.containsMySavedTracks = function(trackIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/tracks/contains",
          params: { ids: trackIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMySavedAlbums = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/albums"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.addToMySavedAlbums = function(albumIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/albums",
          type: "PUT",
          postData: albumIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.removeFromMySavedAlbums = function(albumIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/albums",
          type: "DELETE",
          postData: albumIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.containsMySavedAlbums = function(albumIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/albums/contains",
          params: { ids: albumIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMyTopArtists = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/top/artists"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMyTopTracks = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/top/tracks"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMyRecentlyPlayedTracks = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/player/recently-played"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.followUsers = function(userIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/",
          type: "PUT",
          params: {
            ids: userIds.join(","),
            type: "user"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.followArtists = function(artistIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/",
          type: "PUT",
          params: {
            ids: artistIds.join(","),
            type: "artist"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.followPlaylist = function(playlistId, options, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/followers",
          type: "PUT",
          postData: {}
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.unfollowUsers = function(userIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/",
          type: "DELETE",
          params: {
            ids: userIds.join(","),
            type: "user"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.unfollowArtists = function(artistIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/",
          type: "DELETE",
          params: {
            ids: artistIds.join(","),
            type: "artist"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.unfollowPlaylist = function(playlistId, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/followers",
          type: "DELETE"
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.isFollowingUsers = function(userIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/contains",
          type: "GET",
          params: {
            ids: userIds.join(","),
            type: "user"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.isFollowingArtists = function(artistIds, callback) {
        var requestData = {
          url: _baseUri + "/me/following/contains",
          type: "GET",
          params: {
            ids: artistIds.join(","),
            type: "artist"
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.areFollowingPlaylist = function(playlistId, userIds, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/followers/contains",
          type: "GET",
          params: {
            ids: userIds.join(",")
          }
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.getFollowedArtists = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/following",
          type: "GET",
          params: {
            type: "artist"
          }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getUser = function(userId, options, callback) {
        var requestData = {
          url: _baseUri + "/users/" + encodeURIComponent(userId)
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getUserPlaylists = function(userId, options, callback) {
        var requestData;
        if (typeof userId === "string") {
          requestData = {
            url: _baseUri + "/users/" + encodeURIComponent(userId) + "/playlists"
          };
        } else {
          requestData = {
            url: _baseUri + "/me/playlists"
          };
          callback = options;
          options = userId;
        }
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getPlaylist = function(playlistId, options, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getPlaylistTracks = function(playlistId, options, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getPlaylistCoverImage = function(playlistId, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/images"
        };
        return _checkParamsAndPerformRequest(requestData, callback);
      };
      Constr.prototype.createPlaylist = function(userId, options, callback) {
        var requestData = {
          url: _baseUri + "/users/" + encodeURIComponent(userId) + "/playlists",
          type: "POST",
          postData: options
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.changePlaylistDetails = function(playlistId, data, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId,
          type: "PUT",
          postData: data
        };
        return _checkParamsAndPerformRequest(requestData, data, callback);
      };
      Constr.prototype.addTracksToPlaylist = function(playlistId, uris, options, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "POST",
          postData: {
            uris
          }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback, true);
      };
      Constr.prototype.replaceTracksInPlaylist = function(playlistId, uris, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "PUT",
          postData: { uris }
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.reorderTracksInPlaylist = function(playlistId, rangeStart, insertBefore, options, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "PUT",
          postData: {
            range_start: rangeStart,
            insert_before: insertBefore
          }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.removeTracksFromPlaylist = function(playlistId, uris, callback) {
        var dataToBeSent = uris.map(function(uri) {
          if (typeof uri === "string") {
            return { uri };
          } else {
            return uri;
          }
        });
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "DELETE",
          postData: { tracks: dataToBeSent }
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.removeTracksFromPlaylistWithSnapshotId = function(playlistId, uris, snapshotId, callback) {
        var dataToBeSent = uris.map(function(uri) {
          if (typeof uri === "string") {
            return { uri };
          } else {
            return uri;
          }
        });
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "DELETE",
          postData: {
            tracks: dataToBeSent,
            snapshot_id: snapshotId
          }
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.removeTracksFromPlaylistInPositions = function(playlistId, positions, snapshotId, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/tracks",
          type: "DELETE",
          postData: {
            positions,
            snapshot_id: snapshotId
          }
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.uploadCustomPlaylistCoverImage = function(playlistId, imageData, callback) {
        var requestData = {
          url: _baseUri + "/playlists/" + playlistId + "/images",
          type: "PUT",
          postData: imageData.replace(/^data:image\/jpeg;base64,/, ""),
          contentType: "image/jpeg"
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getAlbum = function(albumId, options, callback) {
        var requestData = {
          url: _baseUri + "/albums/" + albumId
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getAlbumTracks = function(albumId, options, callback) {
        var requestData = {
          url: _baseUri + "/albums/" + albumId + "/tracks"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getAlbums = function(albumIds, options, callback) {
        var requestData = {
          url: _baseUri + "/albums/",
          params: { ids: albumIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getTrack = function(trackId, options, callback) {
        var requestData = {};
        requestData.url = _baseUri + "/tracks/" + trackId;
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getTracks = function(trackIds, options, callback) {
        var requestData = {
          url: _baseUri + "/tracks/",
          params: { ids: trackIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getArtist = function(artistId, options, callback) {
        var requestData = {
          url: _baseUri + "/artists/" + artistId
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getArtists = function(artistIds, options, callback) {
        var requestData = {
          url: _baseUri + "/artists/",
          params: { ids: artistIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getArtistAlbums = function(artistId, options, callback) {
        var requestData = {
          url: _baseUri + "/artists/" + artistId + "/albums"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getArtistTopTracks = function(artistId, countryId, options, callback) {
        var requestData = {
          url: _baseUri + "/artists/" + artistId + "/top-tracks",
          params: { country: countryId }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getArtistRelatedArtists = function(artistId, options, callback) {
        var requestData = {
          url: _baseUri + "/artists/" + artistId + "/related-artists"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getFeaturedPlaylists = function(options, callback) {
        var requestData = {
          url: _baseUri + "/browse/featured-playlists"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getNewReleases = function(options, callback) {
        var requestData = {
          url: _baseUri + "/browse/new-releases"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getCategories = function(options, callback) {
        var requestData = {
          url: _baseUri + "/browse/categories"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getCategory = function(categoryId, options, callback) {
        var requestData = {
          url: _baseUri + "/browse/categories/" + categoryId
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getCategoryPlaylists = function(categoryId, options, callback) {
        var requestData = {
          url: _baseUri + "/browse/categories/" + categoryId + "/playlists"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.search = function(query, types, options, callback) {
        var requestData = {
          url: _baseUri + "/search/",
          params: {
            q: query,
            type: types.join(",")
          }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.searchAlbums = function(query, options, callback) {
        return this.search(query, ["album"], options, callback);
      };
      Constr.prototype.searchArtists = function(query, options, callback) {
        return this.search(query, ["artist"], options, callback);
      };
      Constr.prototype.searchTracks = function(query, options, callback) {
        return this.search(query, ["track"], options, callback);
      };
      Constr.prototype.searchPlaylists = function(query, options, callback) {
        return this.search(query, ["playlist"], options, callback);
      };
      Constr.prototype.searchShows = function(query, options, callback) {
        return this.search(query, ["show"], options, callback);
      };
      Constr.prototype.searchEpisodes = function(query, options, callback) {
        return this.search(query, ["episode"], options, callback);
      };
      Constr.prototype.getAudioFeaturesForTrack = function(trackId, callback) {
        var requestData = {};
        requestData.url = _baseUri + "/audio-features/" + trackId;
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getAudioFeaturesForTracks = function(trackIds, callback) {
        var requestData = {
          url: _baseUri + "/audio-features",
          params: { ids: trackIds }
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getAudioAnalysisForTrack = function(trackId, callback) {
        var requestData = {};
        requestData.url = _baseUri + "/audio-analysis/" + trackId;
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getRecommendations = function(options, callback) {
        var requestData = {
          url: _baseUri + "/recommendations"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getAvailableGenreSeeds = function(callback) {
        var requestData = {
          url: _baseUri + "/recommendations/available-genre-seeds"
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getMyDevices = function(callback) {
        var requestData = {
          url: _baseUri + "/me/player/devices"
        };
        return _checkParamsAndPerformRequest(requestData, {}, callback);
      };
      Constr.prototype.getMyCurrentPlaybackState = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/player"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMyCurrentPlayingTrack = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/player/currently-playing"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.transferMyPlayback = function(deviceIds, options, callback) {
        var postData = options || {};
        postData.device_ids = deviceIds;
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player",
          postData
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.play = function(options, callback) {
        options = options || {};
        var params = "device_id" in options ? { device_id: options.device_id } : null;
        var postData = {};
        ["context_uri", "uris", "offset", "position_ms"].forEach(function(field) {
          if (field in options) {
            postData[field] = options[field];
          }
        });
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/play",
          params,
          postData
        };
        var newOptions = typeof options === "function" ? options : {};
        return _checkParamsAndPerformRequest(requestData, newOptions, callback);
      };
      Constr.prototype.queue = function(uri, options, callback) {
        options = options || {};
        var params = "device_id" in options ? { uri, device_id: options.device_id } : { uri };
        var requestData = {
          type: "POST",
          url: _baseUri + "/me/player/queue",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.pause = function(options, callback) {
        options = options || {};
        var params = "device_id" in options ? { device_id: options.device_id } : null;
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/pause",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.skipToNext = function(options, callback) {
        options = options || {};
        var params = "device_id" in options ? { device_id: options.device_id } : null;
        var requestData = {
          type: "POST",
          url: _baseUri + "/me/player/next",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.skipToPrevious = function(options, callback) {
        options = options || {};
        var params = "device_id" in options ? { device_id: options.device_id } : null;
        var requestData = {
          type: "POST",
          url: _baseUri + "/me/player/previous",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.seek = function(position_ms, options, callback) {
        options = options || {};
        var params = {
          position_ms
        };
        if ("device_id" in options) {
          params.device_id = options.device_id;
        }
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/seek",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.setRepeat = function(state, options, callback) {
        options = options || {};
        var params = {
          state
        };
        if ("device_id" in options) {
          params.device_id = options.device_id;
        }
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/repeat",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.setVolume = function(volume_percent, options, callback) {
        options = options || {};
        var params = {
          volume_percent
        };
        if ("device_id" in options) {
          params.device_id = options.device_id;
        }
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/volume",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.setShuffle = function(state, options, callback) {
        options = options || {};
        var params = {
          state
        };
        if ("device_id" in options) {
          params.device_id = options.device_id;
        }
        var requestData = {
          type: "PUT",
          url: _baseUri + "/me/player/shuffle",
          params
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getShow = function(showId, options, callback) {
        var requestData = {};
        requestData.url = _baseUri + "/shows/" + showId;
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getShows = function(showIds, options, callback) {
        var requestData = {
          url: _baseUri + "/shows/",
          params: { ids: showIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getMySavedShows = function(options, callback) {
        var requestData = {
          url: _baseUri + "/me/shows"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.addToMySavedShows = function(showIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/shows",
          type: "PUT",
          postData: showIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.removeFromMySavedShows = function(showIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/shows",
          type: "DELETE",
          postData: showIds
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.containsMySavedShows = function(showIds, options, callback) {
        var requestData = {
          url: _baseUri + "/me/shows/contains",
          params: { ids: showIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getShowEpisodes = function(showId, options, callback) {
        var requestData = {
          url: _baseUri + "/shows/" + showId + "/episodes"
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getEpisode = function(episodeId, options, callback) {
        var requestData = {};
        requestData.url = _baseUri + "/episodes/" + episodeId;
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getEpisodes = function(episodeIds, options, callback) {
        var requestData = {
          url: _baseUri + "/episodes/",
          params: { ids: episodeIds.join(",") }
        };
        return _checkParamsAndPerformRequest(requestData, options, callback);
      };
      Constr.prototype.getAccessToken = function() {
        return _accessToken;
      };
      Constr.prototype.setAccessToken = function(accessToken) {
        _accessToken = accessToken;
      };
      Constr.prototype.setPromiseImplementation = function(PromiseImplementation) {
        var valid = false;
        try {
          var p = new PromiseImplementation(function(resolve) {
            resolve();
          });
          if (typeof p.then === "function" && typeof p.catch === "function") {
            valid = true;
          }
        } catch (e) {
          console.error(e);
        }
        if (valid) {
          _promiseImplementation = PromiseImplementation;
        } else {
          throw new Error("Unsupported implementation of Promises/A+");
        }
      };
      return Constr;
    }();
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = SpotifyWebApi;
    }
  }
});
export default require_spotify_web_api();
//# sourceMappingURL=spotify-web-api-js.js.map
