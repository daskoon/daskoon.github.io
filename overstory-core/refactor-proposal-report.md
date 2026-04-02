# Overstory Refactor Proposal Report (v2)
**Date:** 2026-03-30
**Source:** asset-master.json

## Executive Summary
This report simulates the propagation of human-readable names across the modular codebase. It now includes Sprite renames (folders, imports, classes) and Asset renames (hashes).

- **Total Potential Changes:** 585
- **Files to be Modified:** 53

## Detailed Impact

### `index.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite102` | **ShopNPC** | 5 |
| Sprite | `Sprite132` | **CutesyShop** | 5 |
| Sprite | `Sprite133` | **ShopNPC2** | 5 |
| Sprite | `Sprite148` | **ShopNPC3** | 5 |
| Sprite | `Sprite156` | **IMG1565** | 5 |
| Sprite | `Sprite169` | **ShopNPC4** | 5 |
| Sprite | `Sprite170` | **ShopNPC5** | 5 |
| Sprite | `Sprite171` | **ShopNPC6** | 5 |
| Sprite | `Sprite172` | **IMG1553** | 5 |
| Sprite | `Sprite177` | **ShopNPC7** | 5 |
| Sprite | `Sprite183` | **ShopNPC8** | 5 |
| Sprite | `Sprite194` | **ShopNPC9** | 5 |
| Sprite | `Sprite2` | **.** | 5 |
| Sprite | `Sprite204` | **ShopNPC10** | 5 |
| Sprite | `Sprite205` | **ShopNPC11** | 5 |
| Sprite | `Sprite208` | **IMG1680** | 5 |
| Sprite | `Sprite214` | **ShopNPC12** | 5 |
| Sprite | `Sprite228` | **costume23** | 5 |
| Sprite | `Sprite231` | **ShopNPC13** | 5 |
| Sprite | `Sprite238` | **ShopNPC14** | 5 |
| Sprite | `Sprite35` | **ShopNPC15** | 5 |
| Sprite | `Sprite36` | **ShopNPC16** | 5 |
| Sprite | `Sprite37` | **ShopNPC17** | 5 |
| Sprite | `Sprite39` | **ShopNPC18** | 5 |
| Sprite | `Sprite40` | **ShopNPC19** | 5 |
| Sprite | `Sprite44` | **ShopNPC20** | 5 |
| Sprite | `Sprite45` | **IMG1436** | 5 |
| Sprite | `Sprite5` | **ShopNPC21** | 5 |
| Sprite | `Sprite53` | **ShopNPC22** | 5 |
| Sprite | `Sprite54` | **CutesyShop2** | 5 |
| Sprite | `Sprite57` | **ShopNPC23** | 5 |
| Sprite | `Sprite58` | **ShopNPC24** | 5 |
| Sprite | `Sprite59` | **ShopNPC25** | 5 |
| Sprite | `Sprite61` | **ShopNPC26** | 5 |
| Sprite | `Sprite67` | **IMG1435** | 5 |
| Sprite | `Sprite74` | **Fighter** | 5 |
| Sprite | `Sprite75` | **Fighter2** | 5 |
| Sprite | `Sprite76` | **Fighter3** | 5 |
| Sprite | `Sprite80` | **Fighter4** | 5 |
| Sprite | `Sprite81` | **Fighter5** | 5 |
| Sprite | `Sprite82` | **Fighter6** | 5 |

### `B4046b0aEe4244ed8c1626776c7c0ca2\B4046b0aEe4244ed8c1626776c7c0ca2.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite45` | **IMG1436** | 6 |
| Sprite | `Sprite5` | **ShopNPC21** | 2 |
| Sprite | `Sprite67` | **IMG1435** | 6 |

### `B4046b0aEe4244ed8c1626776c7c0ca4\B4046b0aEe4244ed8c1626776c7c0ca4.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite67` | **IMG1435** | 2 |

### `Player\Player.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite214` | **ShopNPC12** | 1 |
| Sprite | `Sprite39` | **ShopNPC18** | 1 |
| Sprite | `Sprite40` | **ShopNPC19** | 1 |

### `Sprite102\Sprite102.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite102` | **ShopNPC** | 7 |

### `Sprite132\Sprite132.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite132` | **CutesyShop** | 3 |

### `Sprite133\Sprite133.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite133` | **ShopNPC2** | 3 |

### `Sprite148\Sprite148.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite148` | **ShopNPC3** | 4 |

### `Sprite156\Sprite156.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite156` | **IMG1565** | 3 |

### `Sprite169\Sprite169.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite169` | **ShopNPC4** | 4 |
| Sprite | `Sprite170` | **ShopNPC5** | 1 |
| Sprite | `Sprite171` | **ShopNPC6** | 1 |

### `Sprite170\Sprite170.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite170` | **ShopNPC5** | 3 |

### `Sprite171\Sprite171.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite171` | **ShopNPC6** | 9 |

### `Sprite172\Sprite172.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite172` | **IMG1553** | 9 |

### `Sprite177\Sprite177.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite177` | **ShopNPC7** | 3 |

### `Sprite183\Sprite183.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite183` | **ShopNPC8** | 5 |

### `Sprite194\Sprite194.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite194` | **ShopNPC9** | 5 |

### `Sprite2\Sprite2.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite2` | **.** | 103 |

### `Sprite204\Sprite204.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite204` | **ShopNPC10** | 3 |

### `Sprite205\Sprite205.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite205` | **ShopNPC11** | 3 |

### `Sprite208\Sprite208.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite208` | **IMG1680** | 4 |

### `Sprite214\Sprite214.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite214` | **ShopNPC12** | 3 |

### `Sprite228\Sprite228.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite228` | **costume23** | 8 |

### `Sprite231\Sprite231.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite231` | **ShopNPC13** | 3 |

### `Sprite238\Sprite238.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite238` | **ShopNPC14** | 5 |

### `Sprite35\Sprite35.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite35` | **ShopNPC15** | 3 |

### `Sprite36\Sprite36.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite36` | **ShopNPC16** | 3 |

### `Sprite37\Sprite37.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite37` | **ShopNPC17** | 3 |

### `Sprite39\Sprite39.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite39` | **ShopNPC18** | 6 |

### `Sprite40\Sprite40.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite40` | **ShopNPC19** | 6 |

### `Sprite44\Sprite44.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite44` | **ShopNPC20** | 4 |

### `Sprite45\Sprite45.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite45` | **IMG1436** | 6 |

### `Sprite46\Sprite46.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite45` | **IMG1436** | 2 |

### `Sprite49\Sprite49.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite5` | **ShopNPC21** | 2 |

### `Sprite5\Sprite5.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite5` | **ShopNPC21** | 33 |

### `Sprite53\Sprite53.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite53` | **ShopNPC22** | 8 |

### `Sprite54\Sprite54.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite54` | **CutesyShop2** | 5 |

### `Sprite57\Sprite57.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite57` | **ShopNPC23** | 5 |

### `Sprite58\Sprite58.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite58` | **ShopNPC24** | 4 |

### `Sprite59\Sprite59.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite59` | **ShopNPC25** | 3 |

### `Sprite61\Sprite61.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite61` | **ShopNPC26** | 4 |

### `Sprite67\Sprite67.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite67` | **IMG1435** | 22 |

### `Sprite69\Sprite69.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite45` | **IMG1436** | 2 |

### `Sprite70\Sprite70.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite45` | **IMG1436** | 2 |

### `Sprite74\Sprite74.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite74` | **Fighter** | 6 |

### `Sprite75\Sprite75.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite75` | **Fighter2** | 6 |

### `Sprite76\Sprite76.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite76` | **Fighter3** | 6 |

### `Sprite80\Sprite80.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite80` | **Fighter4** | 8 |

### `Sprite81\Sprite81.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite81` | **Fighter5** | 6 |

### `Sprite82\Sprite82.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite82` | **Fighter6** | 6 |

### `Sprite87\Sprite87.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite80` | **Fighter4** | 2 |

### `Sprite90\Sprite90.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite80` | **Fighter4** | 2 |

### `Sprite91\Sprite91.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite80` | **Fighter4** | 2 |

### `Sprite92\Sprite92.js`
| Type | Original | Proposed Name | Occurrences |
| --- | --- | --- | --- |
| Sprite | `Sprite80` | **Fighter4** | 2 |

## Next Steps
1. **Review** this report for any 'hallucinated' or incorrect mappings.
2. **Commit** the changes using `refactor-apply.py` (to be generated).
3. **Test** the game for broken asset loads.