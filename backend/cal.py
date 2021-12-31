import numpy as np
import math


def genSeries(m=0.5, i=1e-4, k=20, kp=5e-4, rho=2.5e-3, z0=0.1, theta0=1, mode=0):
    dtheta = 0
    dl = 0
    if mode == 1:
        dl = m / k * 9.8
        z00 = 0.2
        z = z00 + dl
        z1 = z00 + 0.5 * 9.8 / k
        theta = 20 * np.pi
        L = 1.5708
        v = 0.25
        z0 -= dl - 0.5 * 9.8 / k
        dtheta = (z * z00 - z ** 2 * (1 - v) / 2 - z00 ** 2 * (1 + v) / 2) / (L ** 2 * (1 + v)) * theta
        theta0 -= dtheta - (z1 * z00 - z1 ** 2 * (1 - v) / 2 - z00 ** 2 * (1 + v) / 2) / (L ** 2 * (1 + v)) * theta
    wz2 = k / m
    wo2 = kp / i
    p1 = wz2 + wo2
    p2 = math.sqrt((wz2 - wo2) ** 2 + rho ** 2 / (m * i))
    w12 = (p1 + p2) / 2
    w22 = (p1 - p2) / 2
    w1 = math.sqrt(w12)
    w2 = math.sqrt(w22)
    t = np.linspace(0, 80, 2400)
    thetaShow = rho * z0 / (2 * i * p2) * (np.cos(w1 * t) - np.cos(w2 * t)) + theta0 / p2 * (
            (w12 - wo2) * np.cos(w2 * t) - (w22 - wo2) * np.cos(w1 * t))
    zShow = z0 / p2 * ((w12 - wo2) * np.cos(w1 * t) - (w22 - wo2) * np.cos(w2 * t)) - 2 * i * theta0 / (rho * p2) * (
            np.cos(w1 * t) - np.cos(w2 * t)) * (w12 - wo2) * (w22 - wo2)
    theta = thetaShow + np.random.normal(0, 0.02, len(thetaShow))
    z = zShow + np.random.normal(0, 0.0005, len(zShow))
    if mode == 1:
        theta += dtheta
        thetaShow += thetaShow
    # 在这里调误差
    print(theta)
    return list(theta), list(z), list(thetaShow), list(zShow)
