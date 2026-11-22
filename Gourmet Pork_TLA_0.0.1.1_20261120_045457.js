{
	engine: 18,
	name: "Gourmet Pork",
	modVersion: "TLA_0.0.1.1",
	modAuthor: "FastJohn443",
	modDescription: "New Command Grab and Install",
	setup: {
		code: "beefb",
		imagePrefix: "beefb_",
		winSound: "afx_Match_WinPork",
		flavors: [
			{
				fid: "default",
				name: "Pork",
				folder: "pork_golden"
			},
			{
				fid: "striped",
				name: "Striped Pork",
				folder: "pork_stripes"
			},
			{
				fid: "mint",
				name: "Mint Pork",
				folder: "pork_mint"
			},
			{
				fid: "peach",
				name: "Peach Pork",
				folder: "pork_peach"
			},
			{
				fid: "plaid",
				name: "Plaid Pork",
				folder: "pork_plaid",
				requireMMR: 1700
			},
			{
				fid: "halloween",
				name: "Porkenstein",
				folder: "pork_porkenstein",
				unlockSteam: true,
				requireCode: "halloween_pork",
				theme: "halloween"
			},
			{
				fid: "birthday",
				name: "Golden Pork",
				folder: "pork_default",
				unlockSteam: true,
				requireCode: "birthday_pork",
				theme: "birthday"
			},
			{
				fid: "normal",
				name: "Normal Pork",
				folder: "pork_normal",
				unlockSteam: true,
				requireCode: "normal_pork",
				theme: "aprilfools"
			},
			{
				fid: "summer",
				name: "Watermelon Pork",
				folder: "pork_watermelon",
				unlockSteam: true,
				requireCode: "summer_pork",
				theme: "summer"
			},
			{
				fid: "pattern",
				name: "Rose Pork",
				folder: "pork_pattern",
				requirePremium: true
			}
		],
		stats: {
			maxHealth: 1050,
			speedForward: 0.055,
			speedBackward: 0.04
		},
		defaults: {
			drawBox: {
				center: {
					x: 0,
					y: -0.21
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			pushboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 3
					}
				}
			],
			strikeHurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			],
			throwHurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			]
		},
		commands: {
			throw: [
				"4d",
				"5d",
				"6d"
			],
			rapid: [
				"6d"
			],
			burst: [
				"4d"
			],
			reject: [
				"6d"
			]
		},
		input: {
			"4a": "seqid_Meat_Gutpunch",
			"5a": "seqid_Meat_Gutpunch",
			"6a": "seqid_Meat_Gutpunch",
			"4b": "seqid_Meat_HeavyPunch",
			"5b": "seqid_Meat_HeavyPunch",
			"6b": "seqid_Meat_HeavyPunch",
			"4c": "seqid_Gourmet_Pork_Wedge_Short",
			"5c": "seqid_Gourmet_Pork_TenderizerStart",
			"6c": "seqid_Meat_Jump"
		}
	},
	combo: {
		fighter2code: "beefb",
		trials: [
		  {
				title: "#0.1: Safe Block String",
				steps: [
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						],
						verify: "use"
					},
					{
						action: "seqid_Meat_Palm",
						inputs: [
						  "cancel",
							"attack1"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Medium",
						inputs: [
						  "cancel",
							"attack3"
						],
						verify: "use"
					}
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#0.2: Rapid Block String",
				steps: [
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						],
						verify: "use"
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
						  "cancel",
							"attack2"
						],
						verify: "use"
					},
					{
						action: "seqid_Shared_Rapid",
						inputs: [
						  "cancel",
						  "right",
							"attack4"
						],
						verify: "use"
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						],
						verify: "use"
					},
				],
				options: {
				  enableMeter: true,
				  enableBlocking: true,
					rePosition: "center"
				}
			},
		  
			{
				title: "#1.1: (Basic) Safe Combo",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Palm",
					"seqid_Gourmet_Pork_Wedge_Medium"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack1"
					],
					[
						"cancel",
						"attack3"
					]
				],
				options: {
					rePosition: "center"
				}
			},
		  {
				title: "#1.2: (Basic) Light Combo",
				combo: [
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut"
				],
				commands: [
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#1.3: (Basic) Launch Combo",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#1.4: (Basic) Jump Combo",
				combo: [
					"seqid_Meat_Jump",
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut"
				],
				commands: [
					[
						"right",
						"attack3"
					],
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#1.5: (Basic) Launch Ender",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_Jump",
					"seqid_Meat_Spike"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"right",
						"attack3"
					],
					[
						"cancel"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#1.6: (Basic) Full Combo",
				combo: [
				  "seqid_Meat_Jump",
				  "seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_Jump",
					"seqid_Meat_Spike"
				],
				commands: [
				  [
						"right",
						"attack3"
					],
					[
						"attack1"
					],
					[
					  "cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"right",
						"attack3"
					],
					[
						"cancel"
					]
				],
				options: {
					rePosition: "center"
				}
			},
			
			{
				title: "#2.1: (Simple) Juggle Combo",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"attack2"
					],
					[
					  "cancel",
						"attack2"
					]
				],
				options: {
					rePosition: "right"
				}
			},
			{
				title: "#2.2: (Simple) Wall Combo",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_HeavyPunch"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"attack2"
					],
					[
						"attack2"
					],
					[
					  "attack2"
					]
				],
				options: {
					rePosition: "right"
				}
			},
			{
				title: "#2.3: (Simple) Rapid Combo",
				combo: [
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut",
					"seqid_Shared_Rapid",
					"seqid_Meat_Gutpunch",
					"seqid_Meat_HeavyPunch",
					"seqid_Meat_Uppercut"
				],
				commands: [
					[
						"attack2"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"right",
						"attack4"
					],
					[
						"attack1"
					],
					[
						"cancel",
						"attack2"
					],
					[
						"cancel",
						"attack2"
					]
				],
				options: {
				  enableMeter: true,
					rePosition: "center"
				}
			},
			
			{
				title: "#3.1: Tenderizer",
				steps: [
					{
						action: "seqid_Gourmet_Pork_TenderizerStart",
						inputs: [
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerThrow",
						inputs: [
							"cancel"
						]
					},
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#3.2: Tenderizer Combo Ender",
				steps: [
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
						  "cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerStart",
						inputs: [
						  "cancel",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerCombo",
						inputs: [
							"cancel"
						]
					},
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#3.3: Tenderizer Wall Ender",
				steps: [
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
						  "cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerStart",
						inputs: [
						  "cancel",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerCombo",
						inputs: [
							"cancel"
						]
					},
				],
				options: {
					rePosition: "right"
				}
			},
			{
				title: "#3.4: Block String to Tenderizer",
				steps: [
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						],
						verify: "use"
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerStart",
						inputs: [
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerThrow",
						inputs: [
							"cancel"
						]
					},
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#3.5: Unblockable",
				steps: [
					{
						action: "seqid_Gourmet_Pork_TenderizerStart",
						inputs: [
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerUnblockable",
						inputs: [
							"cancel",
							"left"
						],
						verify: "use",
					},
					{
						action: "seqid_Gourmet_Pork_TenderizerBombo",
						inputs: [
							"cancel"
						]
					},
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			
			{
				title: "#4.1: Wedges",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Medium",
						inputs: [
						  "left",
							"attack3",
						  "cancel"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Heavy",
						inputs: [
						  "left",
							"attack3",
							"right"
						],
						verify: "use"
					},
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#4.2: Short Wedge",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					}
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#4.3: Medium Wedge",
				steps: [
				  {
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Medium",
						inputs: [
							"cancel"
						],
						verify: "use"
					}
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#4.4: Heavy Wedge",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Heavy",
						inputs: [
						  "cancel",
							"right"
						],
						verify: "use"
					}
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#4.5: Long Wedge",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Medium",
						inputs: [
						  "cancel"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Heavy",
						inputs: [
						  "cancel",
						  "right"
						],
						verify: "use"
					},
				],
				options: {
				  enableBlocking: true,
					rePosition: "center"
				}
			},
			{
				title: "#4.6: Heavy Wedge Combo",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Heavy",
						inputs: [
						  "cancel",
							"right"
						]
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Spike",
						inputs: [
							"cancel"
						]
					}
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#4.7: Medium Wedge Combo",
				steps: [
				  {
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						],
						verify: "use"
					},
					{
						action: "seqid_Gourmet_Pork_Wedge_Medium",
						inputs: [
							"cancel"
						]
					},
					{
						action: "seqid_Meat_Gutpunch",
						inputs: [
							"attack1"
						]
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Spike",
						inputs: [
							"cancel"
						]
					}
				],
				options: {
					rePosition: "center"
				}
			},
			{
				title: "#4.8: Short Wedge Combo",
				steps: [
					{
						action: "seqid_Gourmet_Pork_Wedge_Short",
						inputs: [
							"left",
							"attack3"
						]
					},
					{
						action: "seqid_Shared_Rapid",
						inputs: [
						  "cancel",
							"right",
							"attack4"
						],
						verify: "use"
					},
					{
						action: "seqid_Meat_HeavyPunch",
						inputs: [
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Uppercut",
						inputs: [
							"cancel",
							"attack2"
						]
					},
					{
						action: "seqid_Meat_Jump",
						inputs: [
							"right",
							"attack3"
						]
					},
					{
						action: "seqid_Meat_Spike",
						inputs: [
							"cancel"
						]
					}
				],
				options: {
				  enableMeter: true,
					rePosition: "center"
				}
			},
		]
	},
	actions: {
		poseWin: [
			"rapid_0001",
			"rapid_0002"
		],
		poseLose: [
			"hitstun_0001",
			"hitstun_0002",
			"hitstun_0003"
		],
		rejection: {
			meterCost: 1000,
			frames: [
				{
					effects: [
						"rejectionIn"
					],
					sprite: "punch_0001",
					duration: 5,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					particle: {
						seqid: "seqid_Particle_RejectionFx",
						frames: [
							{
								behind: "fx_reject_0001",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0002",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0003",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0004",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0005",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0006",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0007",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0008",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0009",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0011",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							},
							{
								behind: "fx_reject_0011",
								duration: 5,
								drawBox: {
									center: {
										x: 0,
										y: -0.32
									},
									size: {
										x: 1,
										y: 2.08
									}
								}
							}
						]
					},
					sprite: "punch_0002",
					duration: 1,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "punch_0002",
					duration: 4,
					hurtboxes: [
					]
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "punch_0003",
					sound: "sfx_Meter_Reject",
					duration: 5,
					hurtboxes: [
					],
					attack: {
						setStunPhase: "reject",
						hitstop: 10,
						damage: 0,
						pushback: 1,
						onBlock: -2,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						meterGainDefendOnHit: 0,
						tumble: {
							dx: 1,
							dy: -0.38,
							juggles: 1,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.4,
									y: 0
								},
								size: {
									x: 1.8,
									y: 1
								}
							}
						]
					}
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "punch_0004",
					duration: 5
				},
				{
					effects: [
						"rejectionActive"
					],
					sprite: "punch_0005",
					duration: 5
				},
				{
					effects: [
						"rejectionIn"
					],
					sprite: "punch_0006",
					duration: 5
				}
			]
		},
		rapid: {
			meterCost: 1000,
			frames: [
				{
					sprite: "rapid_0001",
					duration: 5,
					freezeOther: true,
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0002",
					duration: 5,
					freezeOther: true,
					sound: "sfx_Meter_Rapid",
					particle: {
						seqid: "seqid_Particle_RapidFx",
						drawBox: {
							center: {
								x: 0,
								y: -0.32
							},
							size: {
								x: 1,
								y: 2.08
							}
						},
						frames: [
							{
								behind: "fx_rapid_0001",
								duration: 5
							},
							{
								behind: "fx_rapid_0002",
								duration: 5
							},
							{
								behind: "fx_rapid_0003",
								duration: 5
							},
							{
								behind: "fx_rapid_0004",
								duration: 5
							},
							{
								behind: "fx_rapid_0005",
								duration: 5
							},
							{
								behind: "fx_rapid_0006",
								duration: 5
							}
						]
					},
					effects: [
						"rapidPurp"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0003",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0004",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0003",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0004",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				},
				{
					sprite: "rapid_0005",
					duration: 5,
					freezeOther: true,
					effects: [
						"rapidBlack"
					],
					hurtboxes: [
					],
					pushboxes: [
					]
				}
			]
		},
		burst: {
			meterCost: 2000,
			next: "seqid_Shared_Falling",
			isAirborne: true,
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			frames: [
				{
					sprite: "burst_0001",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.15
				},
				{
					sprite: "burst_0002",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.1
				},
				{
					sprite: "burst_0003",
					sound: "sfx_Meter_Burst",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.08,
					effects: [
						"burstIn"
					]
				},
				{
					sprite: "burst_0004",
					duration: 5,
					hurtboxes: [
					],
					cannotBePushed: true,
					hover: -0.06,
					particle: {
						seqid: "seqid_Particle_BurstFx",
						drawBox: {
							center: {
								x: 0,
								y: -0.16
							},
							size: {
								x: 1,
								y: 2.2399999999999998
							}
						},
						frames: [
							{
								behind: "fx_burst_0001",
								duration: 5
							},
							{
								behind: "fx_burst_0002",
								duration: 5
							},
							{
								behind: "fx_burst_0003",
								duration: 5
							},
							{
								behind: "fx_burst_0004",
								duration: 5
							},
							{
								behind: "fx_burst_0005",
								duration: 5
							},
							{
								behind: "fx_burst_0006",
								duration: 5
							},
							{
								behind: "fx_burst_0007",
								duration: 5
							}
						]
					},
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0005",
					duration: 2,
					hurtboxes: [
					],
					cannotBePushed: true,
					attack: {
						ignoreArmor: true,
						damage: 0,
						onBlock: 0,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						meterGainDefendOnHit: 0,
						tumble: {
							dx: 5,
							dy: -1,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 5,
									y: 2
								}
							}
						]
					},
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0005",
					duration: 3,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0006",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0007",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0007",
					duration: 5,
					effects: [
						"burstPink"
					]
				},
				{
					sprite: "burst_0007",
					duration: 5,
					effects: [
						"burstOut"
					]
				},
				{
					sprite: "burst_0008",
					duration: 5,
					hover: 0.05
				}
			]
		},
		downed: {
			frames: [
				{
					duration: 5,
					hover: 0,
					sprite: "down_0001"
				},
				{
					duration: 5,
					hover: 0,
					sprite: "down_0002"
				},
				{
					duration: 5,
					hover: 0,
					sprite: "down_0003"
				},
				{
					duration: 5,
					sprite: "down_0004"
				},
				{
					duration: 5,
					sprite: "down_0005"
				},
				{
					duration: 5,
					sprite: "down_0006"
				},
				{
					duration: 5,
					sprite: "down_0007"
				},
				{
					duration: 5,
					sprite: "down_0008"
				}
			]
		},
		standing: {
			frames: [
				{
					duration: 8,
					sprite: "stand_0001"
				},
				{
					duration: 8,
					sprite: "stand_0002"
				},
				{
					duration: 8,
					sprite: "stand_0003"
				},
				{
					duration: 8,
					sprite: "stand_0004"
				}
			]
		},
		walkBackward: {
			throwHurtboxes: [
				{
					center: {
						x: 0.1,
						y: 0
					},
					size: {
						x: 1.2,
						y: 1
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "walk_backward_0001"
				},
				{
					duration: 5,
					sprite: "walk_backward_0002"
				},
				{
					duration: 5,
					sprite: "walk_backward_0003"
				},
				{
					duration: 5,
					sprite: "walk_backward_0004"
				},
				{
					duration: 5,
					sprite: "walk_backward_0005"
				},
				{
					duration: 5,
					sprite: "walk_backward_0006"
				},
				{
					duration: 5,
					sprite: "walk_backward_0007"
				},
				{
					duration: 5,
					sprite: "walk_backward_0008"
				}
			]
		},
		walkForward: {
			frames: [
				{
					duration: 5,
					sprite: "walk_forward_0001"
				},
				{
					duration: 5,
					sprite: "walk_forward_0002"
				},
				{
					duration: 5,
					sprite: "walk_forward_0003"
				},
				{
					duration: 5,
					sprite: "walk_forward_0004"
				},
				{
					duration: 5,
					sprite: "walk_forward_0005"
				},
				{
					duration: 5,
					sprite: "walk_forward_0006"
				},
				{
					duration: 5,
					sprite: "walk_forward_0007"
				},
				{
					duration: 5,
					sprite: "walk_forward_0008"
				}
			]
		},
		blockstun: {
			palindromeAnimation: true,
			frames: [
				{
					duration: 5,
					sprite: "blockstun_0001"
				},
				{
					duration: 5,
					sprite: "blockstun_0002"
				},
				{
					duration: 1,
					sprite: "blockstun_0003"
				}
			]
		},
		hitstun: {
			palindromeAnimation: true,
			frames: [
				{
					duration: 5,
					sprite: "hitstun_0001"
				},
				{
					duration: 5,
					sprite: "hitstun_0002"
				},
				{
					duration: 1,
					sprite: "hitstun_0003"
				}
			]
		},
		throwstun: {
			frames: [
				{
					duration: 5,
					sprite: "throwstun_0001"
				},
				{
					duration: 1,
					sprite: "throwstun_0002"
				}
			]
		},
		tumbling: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "tumbling_0001"
				},
				{
					duration: 5,
					sprite: "tumbling_0002"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				},
				{
					duration: 5,
					sprite: "tumbling_0003"
				},
				{
					duration: 5,
					sprite: "tumbling_0004"
				},
				{
					duration: 5,
					sprite: "tumbling_0005"
				}
			]
		},
		exhausted: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			frames: [
				{
					duration: 5,
					sprite: "tumbling_0001"
				},
				{
					duration: 5,
					sprite: "tumbling_0002"
				},
				{
					duration: 5,
					sprite: "exhausted_0001"
				},
				{
					duration: 1,
					sprite: "exhausted_0002"
				}
			]
		},
		throwStart: {
			frames: [
				{
					sound: "sfx_Meat_ThrowStart",
					sprite: "throwStart_0001",
					duration: 5
				},
				{
					sprite: "throwStart_0002",
					duration: 10,
					cancel: {
						duration: 11,
						onHit: {
							auto: "seqid_Shared_ThrowHit"
						}
					},
					attack: {
						setStunPhase: "throw",
						ignoreParry: true,
						isThrowStart: true,
						impactType: "none",
						sameSide: false,
						damage: 0,
						meterGainAttackOnHit: 0,
						blockstun: 0,
						hitstun: 30,
						hitboxes: [
							{
								center: {
									x: 0.75,
									y: 0
								},
								size: {
									x: 0.5,
									y: 1
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0
						}
					}
				},
				{
					sprite: "throwStart_0003",
					duration: 5
				},
				{
					sprite: "throwStart_0004",
					duration: 5
				}
			]
		},
		throwHit: {
			frames: [
				{
					sprite: "throwStart_0002",
					duration: 20,
					slide: 0.01,
					pushboxes: [
					]
				},
				{
					sound: "sfx_Meat_ThrowHit",
					sprite: "throwHit_0001",
					duration: 5,
					pushboxes: [
					],
					attack: {
						stunPhase: "throw",
						setStunPhase: "throw",
						impactType: "none",
						sameSide: true,
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: 0.1,
							y: -0.5
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
					sprite: "throwHit_0002",
					duration: 5,
					cancel: {
					  canRapid: true 
					},
					pushboxes: [
					],
					attack: {
						stunPhase: "throw",
						impactType: "none",
						sameSide: true,
						damage: 0.2,
						meterGainAttackOnHit: 500,
						onBlock: 0,
						tumble: {
							dx: 2,
							dy: 0.2,
							juggles: 0,
							canRelaunch: true,
							skipStartupAnimation: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
					sprite: "throwHit_0003",
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					duration: 5
				},
				{
					sprite: "throwHit_0005",
					duration: 5
				},
				{
					sprite: "throwHit_0006",
					duration: 5
				}
			]
		},
		falling: {
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 1
					}
				}
			],
			frames: [
				{
					duration: 5,
					sprite: "fall_0001"
				},
				{
					duration: 5,
					sprite: "fall_0002"
				},
				{
					duration: 5,
					sprite: "fall_0003"
				}
			]
		},
		landing: {
			frames: [
				{
					sprite: "land_0001",
					isAirborne: false,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					},
					duration: 5,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1.4,
								y: 1
							}
						}
					],
					pushboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 3
							}
						}
					]
				}
			]
		}
	},
	attacks: {
		seqid_Meat_Gutpunch: {
			displayName: "Gutpunch",
			displayIndex: 0,
			displayInput: "a",
			frames: [
				{
					sprite: "gutpunch_0001",
					duration: 2
				},
				{
					sound: "sfx_Meat_Gutpunch",
					sprite: "gutpunch_0001",
					duration: 3
				},
				{
					sprite: "gutpunch_0002",
					duration: 5,
					cancel: {
						duration: 14,
						onHit: {
						  "4a": "seqid_Meat_AutoPunch",
							"5a": "seqid_Meat_AutoPunch",
							"6a": "seqid_Meat_AutoPunch",
							"4b": "seqid_Meat_HeavyPunch",
							"5b": "seqid_Meat_HeavyPunch",
							"6b": "seqid_Meat_HeavyPunch",
							"4c": "seqid_Gourmet_Pork_TenderizerStart",
							"5c": "seqid_Gourmet_Pork_TenderizerStart",
							"6c": "seqid_Gourmet_Pork_TenderizerStart"
						},
						onBlock: {
							"4b": "seqid_Meat_HeavyPunch",
							"5b": "seqid_Meat_HeavyPunch",
							"6b": "seqid_Meat_HeavyPunch",
							"4c": "seqid_Gourmet_Pork_TenderizerStart",
							"5c": "seqid_Gourmet_Pork_TenderizerStart",
							"6c": "seqid_Gourmet_Pork_TenderizerStart"
						}
					},
					attack: {
						damage: 0.04,
						blueDamage: 0.01,
						blueOnBlock: 0.01,
						addScalingFirstHit: 2,
						onBlock: 1,
						onHit: 5,
						hitboxes: [
							{
								center: {
									x: 0.85,
									y: 0.05
								},
								size: {
									x: 0.7,
									y: 0.3
								}
							}
						]
					}
				},
				{
					sprite: "gutpunch_0003",
					duration: 5,
					copyPrevAttack: true
				},
				{
					sprite: "gutpunch_0004",
					duration: 5
				},
				{
					sprite: "gutpunch_0005",
					duration: 5
				}
			]
		},
		seqid_Meat_HeavyPunch: {
			displayName: "Heavy Punch",
			displayIndex: 1,
			displayInput: "b",
			frames: [
				{
					sprite: "punch_0001",
					duration: 2
				},
				{
					sound: "sfx_Meat_Punch",
					sprite: "punch_0001",
					duration: 2
				},
				{
					sprite: "punch_0002",
					duration: 5
				},
				{
					sprite: "punch_0003",
					duration: 5,
					cancel: {
						duration: 10,
						canRapid: true,
						onHit: {
							"4a": "seqid_Meat_Palm",
							"5a": "seqid_Meat_Palm",
							"6a": "seqid_Meat_Palm",
							"4b": "seqid_Meat_Uppercut",
							"5b": "seqid_Meat_Uppercut",
							"6b": "seqid_Meat_Uppercut",
							"4c": "seqid_Gourmet_Pork_TenderizerStart",
							"5c": "seqid_Gourmet_Pork_TenderizerStart",
							"6c": "seqid_Gourmet_Pork_TenderizerStart"
						},
						onBlock: {
							"4a": "seqid_Meat_Palm",
							"5a": "seqid_Meat_Palm",
							"6a": "seqid_Meat_Palm",
							"4b": "seqid_Meat_Uppercut",
							"5b": "seqid_Meat_Uppercut",
							"6b": "seqid_Meat_Uppercut",
							"4c": "seqid_Gourmet_Pork_TenderizerStart",
							"5c": "seqid_Gourmet_Pork_TenderizerStart",
							"6c": "seqid_Gourmet_Pork_TenderizerStart"
						},
						aiOnHit: "seqid_Meat_Uppercut",
						aiOnBlock: "seqid_Meat_Palm"
					},
					attack: {
						impactType: "large",
						damage: 0.064,
						blueDamage: 0.016,
						blueOnBlock: 0.016,
						onBlock: -5,
						onHit: 5,
						hitboxes: [
							{
								center: {
									x: 1.35,
									y: -0.3
								},
								size: {
									x: 1.7,
									y: 0.3
								}
							}
						]
					}
				},
				{
					sprite: "punch_0004",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "punch_0005",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "punch_0006",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Meat_Uppercut: {
			displayName: "Uppercut",
			displayIndex: 2,
			displayInput: "b > b",
			frames: [
				{
					sprite: "uppercut_0001",
					duration: 5
				},
				{
					sound: "sfx_Meat_Uppercut1",
					sprite: "uppercut_0002",
					duration: 5
				},
				{
					sprite: "uppercut_0003",
					duration: 5,
					slide: 1.6,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnHit: true
					},
					attack: {
						damage: 0.036,
						blueDamage: 0.008,
						blueOnBlock: 0.008,
						meterGainAttackOnBlock: 40,
						meterGainAttackOnHit: 50,
						meterGainDefendOnBlock: 25,
						blockstun: 35,
						hitstun: 35,
						hitboxes: [
							{
								center: {
									x: 0.4,
									y: -0.25
								},
								size: {
									x: 0.8,
									y: 0.5
								}
							}
						],
						tumbleOnAirborne: {
							dx: 0.2,
							dy: -0.4,
							juggles: 1,
							canRelaunch: true
						}
					}
				},
				{
					sprite: "uppercut_0004",
					duration: 5,
					slide: 1.6,
					copyPrevAttack: true
				},
				{
					sound: "sfx_Meat_Uppercut2",
					sprite: "uppercut_0005",
					duration: 5
				},
				{
					sprite: "uppercut_0006",
					duration: 5
				},
				{
					sprite: "uppercut_0007",
					duration: 5,
					slide: 0.1,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnBlock: true
					},
					attack: {
						impactType: "large",
						damage: 0.064,
						blueDamage: 0.016,
						blueOnBlock: 0.016,
						meterGainAttackOnBlock: 40,
						meterGainAttackOnHit: 50,
						meterGainDefendOnBlock: 25,
						onBlock: -20,
						tumble: {
							dx: 0.5,
							dy: -1.7,
							juggles: 3
						},
						tumbleOnTumbling: {
							dx: 0.1,
							dy: -1.4,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 0.6,
									y: -0.5
								},
								size: {
									x: 1.2,
									y: 1
								}
							}
						]
					}
				},
				{
					sprite: "uppercut_0008",
					duration: 5,
					slide: 0.1,
					copyPrevAttack: true
				},
				{
					sprite: "uppercut_0009",
					duration: 5,
					slide: 0.05
				},
				{
					sprite: "uppercut_0010",
					duration: 5
				},
				{
					sprite: "uppercut_0011",
					duration: 6
				},
				{
					sprite: "uppercut_0012",
					duration: 6
				},
				{
					sprite: "uppercut_0013",
					duration: 6
				},
				{
					sprite: "uppercut_0014",
					duration: 6,
					aiNextOnHit: "seqid_Meat_Jump"
				}
			]
		},
		seqid_Meat_Palm: {
			displayName: "Palm",
			displayIndex: 4,
			displayInput: "b > a",
			frames: [
				{
					sound: "sfx_Meat_Punch",
					sprite: "punch_0005",
					duration: 3
				},
				{
					sprite: "punch_0006",
					duration: 5
				},
				{
					sprite: "palm_0001",
					duration: 5
				},
				{
					sprite: "palm_0002",
					duration: 5,
					cancel: {
						duration: 10,
						canRapid: true,
						onHit: {
							"4c": "seqid_Gourmet_Pork_Wedge_Short",
							"5c": "seqid_Gourmet_Pork_Wedge_Short",
							"6c": "seqid_Gourmet_Pork_Wedge_Short"
						},
						onBlock: {
							"4c": "seqid_Gourmet_Pork_Wedge_Short",
							"5c": "seqid_Gourmet_Pork_Wedge_Short",
							"6c": "seqid_Gourmet_Pork_Wedge_Short"
						}
					},
					attack: {
						damage: 0.056,
						blueDamage: 0.014,
						blueOnBlock: 0.014,
						chip: 0.02,
						pushback: 0.4,
						onBlock: -8,
						tumble: {
							dx: 0.2,
							dy: -0.6,
							juggles: 1
						},
						tumbleOnAirborne: {
							dx: 0.8,
							dy: 0,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 1.5,
									y: -0.25
								},
								size: {
									x: 2,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "palm_0003",
					duration: 5
				},
				{
					sprite: "palm_0004",
					duration: 5
				},
				{
					sprite: "palm_0005",
					duration: 5
				},
				{
					sprite: "palm_0006",
					duration: 5
				}
			]
		},
		seqid_Meat_Jump: {
			displayName: "Jump Attack",
			displayIndex: 10,
			displayInput: "6c",
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
				{
					center: {
						x: 0,
						y: 0
					},
					size: {
						x: 1,
						y: 0.8
					}
				}
			],
			cannotCounterHit: true,
			frames: [
				{
					sprite: "jump_0001",
					throwHurtboxes: [
					],
					duration: 4,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						}
					],
					cannotCounterHit: false
				},
				{
					sprite: "jump_0001",
					throwHurtboxes: [
					],
					sound: "sfx_Meat_Jump",
					particle: {
						seqid: "seqid_Particle_JumpSmoke",
						frames: [
							{
								sprite: "fx_jumpsmoke_0001",
								duration: 6
							},
							{
								sprite: "fx_jumpsmoke_0002",
								duration: 6
							},
							{
								sprite: "fx_jumpsmoke_0003",
								duration: 6
							}
						]
					},
					duration: 1,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						}
					],
					cannotCounterHit: false
				},
				{
					sprite: "jump_0002",
					isAirborne: true,
					duration: 6,
					slide: 1.2,
					hover: -0.5,
					armorVsAirborne: true,
					armorVsProjectile: true
				},
				{
					sprite: "jump_0003",
					isAirborne: true,
					duration: 6,
					slide: 1.2,
					hover: -0.5,
					armorVsAirborne: true,
					armorVsProjectile: true,
					aiIgnoreAttack: true,
					cancel: {
						duration: 7,
						onHitAirborne: {
							auto: "seqid_Meat_Spike"
						}
					},
					attack: {
						hitstop: 10,
						damage: 0.020,
						blueDamage: 0.005,
						blueOnBlock: 0.005,
						cannotKO: true,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						hitsAirborneOnly: true,
						tumble: {
							canRelaunch: true,
							dx: 0,
							dy: 0,
							juggles: 1
						},
						hitboxes: [
							{
								center: {
									x: 0.75,
									y: 0.1
								},
								size: {
									x: 0.5,
									y: 0.4
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0.1
						}
					}
				},
				{
					sprite: "jump_0003",
					isAirborne: true,
					duration: 1,
					slide: 0.016666666666666666,
					hover: -0.016666666666666666
				},
				{
					sprite: "jump_0004",
					isAirborne: true,
					duration: 1,
					slide: 0.016666666666666666,
					hover: -0.016666666666666666,
					cancel: {
						duration: 1,
						onWhiff: {
							"4": "seqid_Pork_EmptyJump",
							"4a": "seqid_Pork_EmptyJump",
							"4b": "seqid_Pork_EmptyJump",
							"4c": "seqid_Pork_EmptyJump"
						}
					}
				},
				{
					sprite: "jump_0004",
					isAirborne: true,
					duration: 4,
					slide: 0.06666666666666667,
					hover: -0.06666666666666667
				},
				{
					sprite: "jump_0005",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.1,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "jump_0006",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.4,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "jump_0007",
					isAirborne: true,
					duration: 6,
					slide: 0.1,
					hover: 0.6,
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					],
					attack: {
						impactType: "large",
						damage: 0.08,
						blueDamage: 0.02,
						blueOnBlock: 0.02,
						addScalingFirstHit: 1,
						onBlock: 10,
						onHit: 20,
						hitboxes: [
							{
								center: {
									x: 1,
									y: 0.15
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "land_0001",
					isAirborne: false,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					},
					duration: 5,
					drawBox: {
						center: {
							x: 0,
							y: -0.21
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1.4,
								y: 1
							}
						}
					],
					pushboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 3
							}
						}
					]
				}
			]
		},
		seqid_Meat_Spike: {
			displayName: "Spike",
			displayIndex: 11,
			displayInput: "6c > on hit",
			drawBox: {
				center: {
					x: 0,
					y: 0
				},
				size: {
					x: 1,
					y: 1.6
				}
			},
			hurtboxes: [
			],
			isAirborne: true,
			next: "seqid_Shared_Falling",
			frames: [
				{
					sound: "sfx_Meat_SpikeSetup",
					sprite: "spike_0001",
					duration: 5,
					hover: -0.03
				},
				{
					sound: "sfx_Meat_SpikeSetup",
					sprite: "spike_0002",
					duration: 5,
					hover: -0.02
				},
				{
					sound: "sfx_Meat_SpikeHit",
					sprite: "spike_0003",
					duration: 5,
					attack: {
						impactType: "large",
						damage: 0.1,
						blueDamage: 0.025,
						onBlock: 0,
						tumble: {
							canRelaunch: true,
							dx: 1.2,
							dy: 0,
							juggles: 0
						},
						hitboxes: [
							{
								center: {
									x: 1,
									y: 0.15
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
					sprite: "spike_0004",
					duration: 5
				},
				{
					sprite: "spike_0005",
					duration: 5
				}
			]
		},
		
		seqid_Gourmet_Pork_TenderizerStart: {
			displayName: "Tenderizer Start",
			displayIndex: 20,
			displayInput: "5c",
			frames: [
				{
					sprite: "bearHug_0001",
					duration: 2,
				},
				{
					sprite: "bearHug_0001",
					sound: "sfx_Meat_CaberStart",
					duration: 3,
					armor: true,
					armorMultiplier: 0.5,
					_autoTech: true
				},
				{
					behind: "bearHug_0002",
					duration: 5,
					armor: true,
					armorMultiplier: 0.5,
					_autoTech: true
				},
				{
					behind: "bearHug_0002",
					duration: 5,
					armor: true,
					armorMultiplier: 0.5,
					cancel: {
						duration: 5,
						onHit: {
						  auto: "seqid_Gourmet_Pork_TenderizerThrow"
						},
						onWhiff: {
						  "4": "seqid_Gourmet_Pork_TenderizerUnblockable"
						}
					},
					attack: {
					  setStunPhase: "throw",
					  cannotBurst: true,
						ignoreParry: true,
						isThrowStart: true,
						impactType: "none",
						damage: 0,
						blockstun: 0,
						hitstun: 40,
						hitboxes: [
							{
								center: {
									x: 0.8,
									y: 0
								},
								size: {
									x: 0.6,
									y: 1
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0
						}
					}
				},
				{
					sprite: "bearHug_0003",
					copyPrevAttack: true,
					duration: 1,
					cancel: {
						duration: 1,
						onWhiff: {
						  auto: "seqid_Gourmet_Pork_TenderizerEnd"
						}
					}
				}
			]
		},
		seqid_Gourmet_Pork_TenderizerEnd: {
			displayName: "Tenderizer End",
			displayIndex: 22,
			displayInput: "5c > on whiff",
			frames: [
			  {
					behind: "bearHug_0003",
					duration: 5,
					cancel: {
					  onHit: {
					    auto: "seqid_Gourmet_Pork_TenderizerCombo"
					  }
					},
					attack: {
					  cannotBurst: true,
						ignoreArmor: true,
						ignoreParry: true,
						impactType: "none",
						damage: 0,
						blockstun: 0,
						tumble: {
						  dx: 0,
						  dy: 0.7,
						  juggles: 1,
						  canRelaunch: true,
						  restandStun: 50
						},
						hitboxes: [
							{
								center: {
									x: 0.8,
									y: 0
								},
								size: {
									x: 0.6,
									y: 1
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0
						}
					}
				},
				{
					sprite: "throwStart_0001",
					duration: 5,
					forceRecovery: true
				},
				{
					sprite: "throwStart_0002",
					duration: 5,
			  forceRecovery: true
				},
				{
					sprite: "throwStart_0003",
					duration: 5,
			  forceRecovery: true
				},
				{
			  sprite: "throwStart_0004",
			  duration: 5,
			  forceRecovery: true
			},
			{
			  sprite: "throwHit_0006",
			  mirrorImage: true,
				duration: 5,
				forceRecovery: true
			 }
			]
		},
		seqid_Gourmet_Pork_TenderizerUnblockable: {
			displayName: "Tenderizer Unblockable",
			displayIndex: 21,
			displayInput: "5c > 4",
			frames: [
			  {
			    behind: "bearHug_0002",
			    duration: 10
			  },
			  {
			    behind: "bearHug_0003",
			    duration: 15
			  },
			  {
			    behind: "throwStart_0001",
			    duration: 5
			  },
				{
					behind: "throwStart_0001",
					duration: 5,
					cancel: {
						duration: 5,
						onHit: {
							auto: "seqid_Gourmet_Pork_TenderizerBombo"
						}
					},
					attack: {
					  unblockable: true,
					  ignoreParry: true,
						impactType: "none",
						damage: 0,
						blockstun: 0,
						hitstun: 40,
						tumbleOnTumbling: {
						  dx: 0,
						  dy: 0.7,
						  juggles: 1,
						  canRelaunch: true,
						  restandStun: 40
						},
						hitboxes: [
							{
								center: {
									x: 0.8,
									y: 0
								},
								size: {
									x: 0.6,
									y: 1
								}
							}
						],
						capture: true,
						snapTo: {
							x: 0.8,
							y: 0
						}
					}
				},
				{
					sprite: "throwStart_0001",
					duration: 5,
					copyPrevAttack: true,
					forceRecovery: true
				},
				{
					sprite: "throwStart_0002",
					duration: 5,
			  forceRecovery: true
				},
				{
					sprite: "throwStart_0003",
					duration: 5,
			  forceRecovery: true
				},
				{
			  sprite: "throwStart_0004",
			  duration: 5,
			  forceRecovery: true
			},
			{
			  sprite: "throwHit_0006",
			  mirrorImage: true,
				duration: 5,
				forceRecovery: true
			 }
			]
		},
		seqid_Gourmet_Pork_TenderizerThrow: {
			displayName: "Tenderizer Throw",
			displayIndex: 23,
			displayInput: "5c > on hit",
			pushboxes: [
			],
			frames: [
			  {
			    behind: "throwStart_0001",
			    sound: "sfx_Meat_Flex",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.25,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "palm_0006",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.5,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: 0,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
		  	{
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: -0.4,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
				{
					sprite: "throwStart_0004",
					sound: "sfx_Meat_ThrowHit",
					duration: 5,
					setInstall: "install_GravyTrain",
					cancel: {
					  duration: 10,
					  canRapid: true
					},
					attack: {
					  stunPhase: "throw",
						cannotBurst: true,
						impactType: "large",
						hitstop: 20,
						damage: 0.001,
						blueDamage: 0.099,
						pushback: 1.5,
						onBlock: 0,
						onHit: 10,
						hitboxes: [
							{
								center: {
									x: 1,
									y: -0.3
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
			  sprite: "rapid_0005",
			  duration: 5,
			  forceRecovery: true
			},
			{
			  sprite: "throwHit_0006",
			  mirrorImage: true,
			  duration: 5,
				forceRecovery: true
			 }
			]
		},
		seqid_Gourmet_Pork_TenderizerCombo: {
			displayName: "Tenderizer Combo",
			displayIndex: 24,
			displayInput: "5c > on stun",
			pushboxes: [
			],
			frames: [
			  {
			    behind: "throwStart_0001",
			    sound: "sfx_Meat_Flex",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.25,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "palm_0006",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.5,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: 0,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
		  	{
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: -0.4,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
				{
					sprite: "throwStart_0004",
					sound: "sfx_Meat_ThrowHit",
					duration: 5,
					cancel: {
					  duration: 10,
					  canRapidHitGrounded: true
					},
					attack: {
						cannotBurst: true,
						ignoreArmor: true,
						ignoreParry: true,
						impactType: "large",
						hitstop: 20,
						damage: 0.001,
						blueDamage: 0.099,
						pushback: 1.5,
						onBlock: 0,
						onHit: 10,
						capture: true,
						hitboxes: [
							{
								center: {
									x: 1,
									y: -0.3
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
			  sprite: "rapid_0005",
			  duration: 5,
			  forceRecovery: true
			},
			{
			  sprite: "throwHit_0006",
			  mirrorImage: true,
			  duration: 5,
				forceRecovery: true
			 }
			]
		},
		seqid_Gourmet_Pork_TenderizerBombo: {
			displayName: "Tenderizer Bombo",
			displayIndex: 25,
			displayInput: "5c > 4 > on hit",
			pushboxes: [
			],
			frames: [
			  {
			    behind: "throwStart_0001",
			    sound: "sfx_Meat_Flex",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.25,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "palm_0006",
			    duration: 5,
			    drawBox: {
			        center: {
			          x: -0.5,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
			  },
			  {
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: 0,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
		  	{
			    behind: "uppercut_0014",
			    duration: 10,
			    drawBox: {
			        center: {
			          x: -0.4,
			          y: -0.21
			        },
			        size: {
			          x: 1,
			          y: 1.6
			        }
			    }
		  	},
				{
					sprite: "throwStart_0004",
					sound: "sfx_Meat_ThrowHit",
					duration: 5,
					attack: {
						impactType: "large",
						hitstop: 40,
						damage: 0.001,
						blueDamage: 0.249,
						onBlock: 0,
						tumble: {
						  dx: 3,
						  dy: 0,
						  juggle: 0,
						  canRelaunch: true,
						  skipStartupAnimation: true
						},
						hitboxes: [
							{
								center: {
									x: 1,
									y: -0.3
								},
								size: {
									x: 1,
									y: 0.4
								}
							}
						]
					}
				},
				{
			  sprite: "rapid_0005",
			  duration: 5,
			  forceRecovery: true
			},
			{
			  sprite: "throwHit_0005",
			  mirrorImage: true,
			  duration: 5,
				forceRecovery: true
			},
			{
			  sprite: "throwHit_0006",
			  mirrorImage: true,
			  duration: 5,
				forceRecovery: true
			 }
			]
		},
		seqid_Gourmet_Pork_TenderizerUnblockableStart: {
		  displayName: "Tenderizer Unblockable",
			displayIndex: 21,
			displayInput: "5c",
			frames: []
		},
		
		
		seqid_Gourmet_Pork_Wedge_Short: {
			displayName: "Short Wedge",
			displayIndex: 30,
			displayInput: "4c > Hit",
			frames: [
				{
					sprite: "chop_0001",
					duration: 2,
					armorVsAirborne: true,
					armorVsProjectile: true
				},
				{
					sound: "sfx_Meat_Chop",
					sprite: "chop_0001",
					duration: 2,
					armorVsAirborne: true,
					armorVsProjectile: true
				},
				{
					sprite: "chop_0002",
					duration: 6,
					armor: true
				},
				{
					sprite: "chop_0003",
					duration: 5,
					armor: true,
					slide: 0.2
				},
				{
					sprite: "chop_0004",
					duration: 5,
					armor: true,
					slide: 0.4
				},
				{
					sprite: "chop_0005",
					duration: 5,
					armor: true,
					slide: 0.2,
					cancel: {
						duration: 10,
						canRapidHitAirborne: true,
						canRapidHitGrounded: true,
						onHitGrounded: {
						  auto: "seqid_Gourmet_Pork_Toss"
						}
					},
					attack: {
						impactType: "large",
						damage: 0.1,
						chip: 0.03,
						addScalingFirstHit: 3,
						onBlock: -7,
						onHit: 9,
						hitboxes: [
							{
								center: {
									x: 1.3,
									y: -0.15
								},
								size: {
									x: 1.6,
									y: 0.4
								}
							}
						],
						tumbleOnAirborne: {
							canRelaunch: true,
							dx: 0,
							dy: 3,
							juggles: 0
						}
					}
				},
				{
					sprite: "chop_0006",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						},
						{
							center: {
								x: 0.8,
								y: 0
							},
							size: {
								x: 0.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "chop_0007",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						},
						{
							center: {
								x: 0.8,
								y: 0
							},
							size: {
								x: 0.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "chop_0008",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						},
						{
							center: {
								x: 0.8,
								y: 0
							},
							size: {
								x: 0.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "chop_0009",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 1
							}
						},
						{
							center: {
								x: 0.8,
								y: 0
							},
							size: {
								x: 0.6,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Gourmet_Pork_Toss: {
		  displayName: "Salad Toss",
			displayIndex: 30,
			displayInput: "4c > onHit",
			frames: [
			  {
			    sprite: "chop_0009",
			    duration: 5,
			  },
			  {
			    sprite: "chop_0008",
			    duration: 5,
			  },
			  {
			    sprite: "chop_0007",
			    duration: 5,
			  },
			  {
			    sprite: "chop_0006",
			    duration: 5,
			    slide: 0.2,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						onHit: 20,
						capture: true,
						snapTo: {
							x: 1.6,
							y: 0
						},
						hitboxes: [
							{
								center: {
									x: 1.3,
									y: -0.15
								},
								size: {
									x: 1.6,
									y: 0.4
								}
							}
						]
					}
			  },
			  {
			    sprite: "chop_0005",
			    duration: 10,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						onHit: 20,
						capture: true,
						snapTo: {
							x: 1.6,
							y: 0
						},
						hitboxes: [
							{
								center: {
									x: 1.3,
									y: -0.15
								},
								size: {
									x: 1.6,
									y: 0.4
								}
							}
						]
					}
			  },
			  {
			    sprite: "chop_0004",
			    duration: 5,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: 0.25,
							y: -0.8
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
			  },
			  {
			    behind: "chop_0001",
			    duration: 2,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: -0.6,
							y: -0.8
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
			  },
			  {
			    behind: "chop_0003",
			    duration: 3,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: -0.6,
							y: -0.8
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
			  },
			  {
			    behind: "chop_0002",
			    duration: 2,
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: -0.6,
							y: -0.8
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
			  },
			  {
					sound: "sfx_Meat_ThrowHit",
					behind: "throwHit_0001",
					mirrorImage: true,
					duration: 13,
					pushboxes: [
					],
					attack: {
						impactType: "none",
						damage: 0,
						meterGainAttackOnHit: 0,
						onBlock: 0,
						tumble: {
							dx: 0,
							dy: 0,
							juggles: 1,
							canRelaunch: true
						},
						capture: true,
						snapTo: {
							x: -0.6,
							y: -0.7
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
			    sprite: "chop_0004",
			    duration: 5,
			    attack: {
			      impactType: "none",
						damage: 0,
						onBlock: 0,
						tumble: {
							dx: 2,
							dy: 0.2,
							juggles: 0,
							canRelaunch: true,
							skipStartupAnimation: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
			  },
				{
					sprite: "throwHit_0002",
					mirrorImage: true,
					duration: 5,
					cancel: {
					  duration: 30,
					  canWhiffRapid: true
					},
					pushboxes: [
					],
					attack: {
					  impactType: "none",
						damage: 0,
						onBlock: 0,
						tumble: {
							dx: 2,
							dy: 0.2,
							juggles: 0,
							canRelaunch: true,
							skipStartupAnimation: true
						},
						hitboxes: [
							{
								center: {
									x: 0,
									y: 0
								},
								size: {
									x: 4,
									y: 2
								}
							}
						]
					}
				},
				{
					sprite: "throwHit_0003",
					mirrorImage: true,
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					mirrorImage: true,
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					mirrorImage: true,
					duration: 5
				},
				{
					sprite: "throwHit_0004",
					mirrorImage: true,
					duration: 5
				},
				{
					sprite: "throwHit_0005",
					mirrorImage: true,
					duration: 5
				},
				{
					sprite: "throwHit_0006",
					mirrorImage: true,
					duration: 5
				}
			  ]
		},
		
		seqid_Pork_EmptyJump: {
			displayName: "Empty Jump",
			displayIndex: 11,
			displayInput: "6c > 4",
			displayCancelsFrom: "seqid_Meat_Jump",
			frames: [
				{
					sprite: "jump_0004",
					duration: 5,
					slide: 0.08333333333333333,
					hover: -0.08333333333333333,
					isAirborne: true,
					cannotCounterHit: true,
					drawBox: {
						center: {
							x: 0,
							y: 0
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "jump_0005",
					duration: 6,
					slide: 0.1,
					hover: 0.1,
					isAirborne: true,
					cannotCounterHit: true,
					drawBox: {
						center: {
							x: 0,
							y: 0
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "jump_0006",
					duration: 6,
					slide: 0.1,
					hover: 0.4,
					isAirborne: true,
					cannotCounterHit: true,
					drawBox: {
						center: {
							x: 0,
							y: 0
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "jump_0005",
					duration: 5,
					slide: 0.1,
					hover: 0.6,
					isAirborne: true,
					cannotCounterHit: true,
					drawBox: {
						center: {
							x: 0,
							y: 0
						},
						size: {
							x: 1,
							y: 1.6
						}
					},
					hurtboxes: [
						{
							center: {
								x: 0,
								y: 0
							},
							size: {
								x: 1,
								y: 0.6
							}
						}
					]
				},
				{
					sprite: "stand_0001",
					duration: 1,
					particle: {
						seqid: "seqid_Particle_LandSmoke",
						frames: [
							{
								sprite: "fx_landsmoke_0001",
								behind: "fx_landsmoke_behind_0001",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0002",
								behind: "fx_landsmoke_behind_0002",
								duration: 6
							},
							{
								sprite: "fx_landsmoke_0003",
								behind: "fx_landsmoke_behind_0003",
								duration: 6
							}
						]
					}
				}
			]
		},
		
		seqid_Meat_AutoPunch: {
			displayName: "AutoCombo2",
			displayIndex: 1,
			displayInput: "b",
			frames: [
				{
					sprite: "punch_0001",
					duration: 2
				},
				{
					sound: "sfx_Meat_Punch",
					sprite: "punch_0001",
					duration: 2
				},
				{
					sprite: "punch_0002",
					duration: 5
				},
				{
					sprite: "punch_0003",
					duration: 5,
					cancel: {
						duration: 10,
						canRapid: true,
						onHit: {
							"4a": "seqid_Meat_AutoUpper",
							"5a": "seqid_Meat_AutoUpper",
							"6a": "seqid_Meat_AutoUpper",
							"4b": "seqid_Meat_Uppercut",
							"5b": "seqid_Meat_Uppercut",
							"6b": "seqid_Meat_Uppercut",
							"4c": "seqid_Gourmet_Pork_TenderizerStart",
							"5c": "seqid_Gourmet_Pork_TenderizerStart",
							"6c": "seqid_Gourmet_Pork_TenderizerStart"
						},
						aiOnHit: "seqid_Meat_Uppercut",
						aiOnBlock: "seqid_Meat_Palm"
					},
					attack: {
						impactType: "large",
						damage: 0.036,
						blueDamage: 0.004,
						blueOnBlock: 0.004,
						onBlock: -5,
						onHit: 5,
						hitboxes: [
							{
								center: {
									x: 1.35,
									y: -0.3
								},
								size: {
									x: 1.7,
									y: 0.3
								}
							}
						]
					}
				},
				{
					sprite: "punch_0004",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "punch_0005",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				},
				{
					sprite: "punch_0006",
					duration: 5,
					strikeHurtboxes: [
						{
							center: {
								x: 0.3,
								y: 0
							},
							size: {
								x: 1.6,
								y: 1
							}
						}
					]
				}
			]
		},
		seqid_Meat_AutoUpper: {
			displayName: "AutoCombo3",
			displayIndex: 2,
			displayInput: "b > b",
			frames: [
				{
					sprite: "uppercut_0001",
					duration: 5
				},
				{
					sound: "sfx_Meat_Uppercut1",
					sprite: "uppercut_0002",
					duration: 5
				},
				{
					sprite: "uppercut_0003",
					duration: 5,
					slide: 1.6,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnHit: true
					},
					attack: {
						damage: 0.018,
						blueDamage: 0.002,
						blueOnBlock: 0.002,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						blockstun: 35,
						hitstun: 35,
						hitboxes: [
							{
								center: {
									x: 0.4,
									y: -0.25
								},
								size: {
									x: 0.8,
									y: 0.5
								}
							}
						],
						tumbleOnAirborne: {
							dx: 0.2,
							dy: -0.4,
							juggles: 1,
							canRelaunch: true
						}
					}
				},
				{
					sprite: "uppercut_0004",
					duration: 5,
					slide: 1.6,
					copyPrevAttack: true
				},
				{
					sound: "sfx_Meat_Uppercut2",
					sprite: "uppercut_0005",
					duration: 5
				},
				{
					sprite: "uppercut_0006",
					duration: 5
				},
				{
					sprite: "uppercut_0007",
					duration: 5,
					slide: 0.1,
					cancel: {
						duration: 10,
						canRapid: true,
						aiRapidOnBlock: true
					},
					attack: {
						impactType: "large",
						damage: 0.036,
						blueDamage: 0.004,
						blueOnBlock: 0.004,
						meterGainAttackOnBlock: 0,
						meterGainAttackOnHit: 0,
						meterGainDefendOnBlock: 0,
						onBlock: -20,
						tumble: {
							dx: 0.5,
							dy: -1.7,
							juggles: 3
						},
						tumbleOnTumbling: {
							dx: 0.1,
							dy: -1.4,
							juggles: 0,
							canRelaunch: true
						},
						hitboxes: [
							{
								center: {
									x: 0.6,
									y: -0.5
								},
								size: {
									x: 1.2,
									y: 1
								}
							}
						]
					}
				},
				{
					sprite: "uppercut_0008",
					duration: 5,
					slide: 0.1,
					copyPrevAttack: true
				},
				{
					sprite: "uppercut_0009",
					duration: 5,
					slide: 0.05
				},
				{
					sprite: "uppercut_0010",
					duration: 5
				},
				{
					sprite: "uppercut_0011",
					duration: 6
				},
				{
					sprite: "uppercut_0012",
					duration: 6
				},
				{
					sprite: "uppercut_0013",
					duration: 6
				},
				{
					sprite: "uppercut_0014",
					duration: 6,
					aiNextOnHit: "seqid_Meat_Jump"
				}
			]
		},
	},
	installs: {
	  install_GravyTrain: {
	    duration: 600,
	    afterimages: [
	      {
	        delay: 5,
	        opacity: 0.75
	      }
	  ],
	  sequenceOverride: {
	    
	  }
	  }
	}
}