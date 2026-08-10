---
title: Telling CC from VBUS on a USB-C PD charger with just a multimeter
order: 5
slug: usbc-charger
# image:  # add /img/buildlog/... when you have a photo
tags: [Electronics, USB-C PD, Debugging]
---

My MSI laptop charger (A21-100P1A, 20V/5A/100W) had a damaged USB-C plug, so I spliced its
DC-side cable onto a donor cable with a good connector. The catch: a USB-C PD source keeps
VBUS *off* until it negotiates over the CC line, so you can't just match wires by probing for
voltage — most of them read ~0V until a sink is attached.

I identified the MSI wires from open-circuit readings alone: black sat at 0V (GND), blue read
~4V (CC — the only line pulled high, by the source's Rp), and white read ~0V, which is exactly
what VBUS *should* do before negotiation. The donor cable took a live test — plugged its good
end into a charger and probed the bare wires — which confirmed its CC line by the ~3.75V
pull-up. Final splice: MSI white→VBUS, black→GND, blue→CC, with the donor's spare config wire
capped off.

One honest limit: without a VCONN line the cable's e-marker never powers up, so the repair tops
out around 20V/3A/60W rather than the full 100W. Fine for my use — and a good reminder that the
"right" answer depends on which pins the spec actually needs.