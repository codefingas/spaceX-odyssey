import { User } from "./index.js";
import { falcon1, falcon9 } from "./assets/flights/fares";
import { flightCost, destinations } from "./assets/flights/board";
const { abuja, spock, iss, moon } = destinations;

const takeFlight = (passenger, cost) => passenger.balance - cost;

describe("User", () => {
  test("user can load wallet with 3000BTC", () => {
    User.fundWallet(3000);
    expect(User.balance).toBeGreaterThanOrEqual(3000);
  });

  test("user can take a Falcon 9 trip from Abuja station to the Moon", () => {
    const mockFalcon9 = jest.fn(falcon9);
    const mockFlightCost = jest.fn(flightCost);
    const mockTakeFlight = jest.fn(
      takeFlight(User, mockFlightCost(abuja, mockFalcon9, moon))
    );
    const mockUserPurchase = jest.fn(User.purchase);
    mockUserPurchase.call(User, mockTakeFlight);

    expect(mockFalcon9).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalled();
    expect(mockUserPurchase).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalledWith(abuja, mockFalcon9, moon);
    expect(mockUserPurchase).toHaveBeenCalledWith(mockTakeFlight);
  });

  test("user can take a Falcon 1 trip from the Moon to Spock station on Mars", () => {
    const mockFalcon1 = jest.fn(falcon1);
    const mockFlightCost = jest.fn(flightCost);
    const mockTakeFlight = jest.fn(
      takeFlight(User, mockFlightCost(moon, mockFalcon1, spock))
    );
    const mockUserPurchase = jest.fn(User.purchase);
    mockUserPurchase.call(User, mockTakeFlight);

    expect(mockFalcon1).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalled();
    expect(mockUserPurchase).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalledWith(moon, mockFalcon1, spock);
    expect(mockUserPurchase).toHaveBeenCalledWith(mockTakeFlight);
  });

  test("user can take a Falcon 9 trip from Mars to the International Space Station (ISS) in Lower Earth", () => {
    const mockFalcon9 = jest.fn(falcon9);
    const mockFlightCost = jest.fn(flightCost);
    const mockTakeFlight = jest.fn(
      takeFlight(User, mockFlightCost(spock, mockFalcon9, iss))
    );
    const mockUserPurchase = jest.fn(User.purchase);
    mockUserPurchase.call(User, mockTakeFlight);

    expect(mockFalcon9).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalled();
    expect(mockUserPurchase).toHaveBeenCalled();
    expect(mockFlightCost).toHaveBeenCalledWith(spock, mockFalcon9, iss);
    expect(mockUserPurchase).toHaveBeenCalledWith(mockTakeFlight);
  });
});
