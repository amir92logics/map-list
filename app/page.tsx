'use client'

import { useCallback, useState } from "react";
import { Button, Stack, TextField, Typography, Grid, Box } from '@mui/material';
import { Data } from './Data';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Circle,
  InfoWindow,
  // InfoWindow
} from '@react-google-maps/api';

export default function Home() {

  const [cityName, setCityName] = useState<any>(null);
  const [mapList, setMapList] = useState<any>([]);
  const [location] = useState<any>({ lat: 37.0902, lng: -95.7129 });
  const getLocation = () => {
    const _tempData = Data.filter((item: any) => item.city == cityName);
    setMapList(_tempData);

  }

  const onLoad = useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // map.setZoom(3);
    // a = 12;
    const usBounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(24.396308, -125.0), // Southwest corner
      new window.google.maps.LatLng(49.384358, -66.93457) // Northeast corner
    );

    map.fitBounds(usBounds); // Fit the map to the defined bounds
    map.setZoom(12); // Set an initial zoom level
  }, []);
  return (
    <Grid
      container
      sx={{
        pt: { md: 10, xs: 10 }
      }}
    >
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 5 }}>
        <Stack>
          <Typography sx={{ color: '#fff' }}>
            Find Shops by city name
          </Typography>
          <Grid
            container
            sx={{
              position: 'relative',
            }}
          >
            <Grid
              item
              xs={12}
            >
              <Stack>
                <TextField
                  fullWidth
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                  placeholder="Enter city name"
                  variant="outlined"
                  sx={{
                    background: 'white',
                    outline: 'none',
                    border: 'none',
                    borderRadius: 1,
                    minWidth: '500px'
                  }}
                />{' '}
              </Stack>

              <Button
                variant="contained"
                sx={{ px: 4, py: 1, position: 'absolute', right: 7, top: 6 }}
                onClick={getLocation}
              >
                Search
              </Button>
            </Grid>{mapList.length}
          </Grid>

        </Stack>
      </Grid>
      {mapList.length > 0 && <Grid item xs={12} sm={12} md={12} lg={12}>
              <Stack sx={{ position: 'relative' }}>
                <div>
                  <LoadScript
                    googleMapsApiKey="AIzaSyAaLn57a6HRQuLwp5Imcmjhz0LyK6UCsWE"
                    loadingElement={<div>Loading...</div>}
                    libraries={['places']}
                  >
                    <GoogleMap
                      mapContainerStyle={{ height: window.innerHeight - 100, width: !open ? '100%' : 'auto', }}
                      options={{
                        styles: [
                          {
                            "featureType": "all",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "visibility": "on"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [
                              {
                                "color": "#f2f2f2"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#686868"
                              },
                              {
                                "visibility": "on"
                              }
                            ]
                          },
                          {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [
                              {
                                "color": "#f2f2f2"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "all",
                            "stylers": [
                              {
                                "visibility": "on"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "labels.icon",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                              {
                                "saturation": -100
                              },
                              {
                                "lightness": 45
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [
                              {
                                "visibility": "simplified"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "lightness": "-22"
                              },
                              {
                                "visibility": "on"
                              },
                              {
                                "color": "#b4b4b4"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "saturation": "-51"
                              },
                              {
                                "lightness": "11"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text",
                            "stylers": [
                              {
                                "saturation": "3"
                              },
                              {
                                "lightness": "-56"
                              },
                              {
                                "visibility": "simplified"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "lightness": "-52"
                              },
                              {
                                "color": "#9094a0"
                              },
                              {
                                "visibility": "simplified"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "weight": "6.13"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.icon",
                            "stylers": [
                              {
                                "weight": "1.24"
                              },
                              {
                                "saturation": "-100"
                              },
                              {
                                "lightness": "-10"
                              },
                              {
                                "gamma": "0.94"
                              },
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "visibility": "on"
                              },
                              {
                                "color": "#b4b4b4"
                              },
                              {
                                "weight": "5.40"
                              },
                              {
                                "lightness": "7"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "labels.text",
                            "stylers": [
                              {
                                "visibility": "simplified"
                              },
                              {
                                "color": "#231f1f"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "visibility": "simplified"
                              },
                              {
                                "color": "#595151"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "lightness": "-16"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "visibility": "on"
                              },
                              {
                                "color": "#d7d7d7"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "labels.text",
                            "stylers": [
                              {
                                "color": "#282626"
                              },
                              {
                                "visibility": "simplified"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "saturation": "-41"
                              },
                              {
                                "lightness": "-41"
                              },
                              {
                                "color": "#2a4592"
                              },
                              {
                                "visibility": "simplified"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "weight": "1.10"
                              },
                              {
                                "color": "#ffffff"
                              }
                            ]
                          },
                          {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                              {
                                "visibility": "on"
                              }
                            ]
                          },
                          {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "lightness": "-16"
                              },
                              {
                                "weight": "0.72"
                              }
                            ]
                          },
                          {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "lightness": "-37"
                              },
                              {
                                "color": "#2a4592"
                              }
                            ]
                          },
                          {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.line",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "visibility": "off"
                              },
                              {
                                "color": "#eeed6a"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.line",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "visibility": "off"
                              },
                              {
                                "color": "#0a0808"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                              {
                                "color": "#b7e4f4"
                              },
                              {
                                "visibility": "on"
                              }
                            ]
                          }
                        ],
                        zoomControl: true, 
                         zoom: 15
                      }}
                      onLoad={onLoad}
                      center={location}
                    >
                      {mapList?.length > 0 && (
                        <>
                          <Circle
                            center={location}
                            radius={5 * 1609.34}
                            options={{
                              fillColor: '#3F78FF',
                              fillOpacity: 0.3,
                              strokeWeight: 2,
                              strokeColor: '#3F78FF',
                              clickable: false,
                              editable: false,
                              zIndex: 1
                            }}
                          />
                          {mapList?.map((marker: any, index: any) => (
                            <Marker
                              key={index}
                              position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
                              draggable={false}
                              options={{
                                optimized: false,
                                shape: {
                                  coords: [12.5, 12.5, 12.5],
                                  type: 'circle'
                                }
                              }}
                            >
                                <InfoWindow
                                >
                                  <Stack>
                                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
                                      <Typography sx={{ fontWeight: 'bold' }}>{marker?.name}</Typography>
                                    </Box>
                                  </Stack>
                                </InfoWindow>
                            </Marker>
                          ))}

                        </>
                      )}
                    </GoogleMap>
                  </LoadScript>
                </div>
              </Stack>
            </Grid>}
    </Grid>
  );
}
