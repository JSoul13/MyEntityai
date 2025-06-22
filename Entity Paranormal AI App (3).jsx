function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');
  const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [analysisResults, setAnalysisResults] = React.useState(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [selectedCase, setSelectedCase] = React.useState(null);
  const [showCollabModal, setShowCollabModal] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  // Mock data for demonstration
  const mockCases = [
    {
      id: 1,
      name: "Abandoned Hospital Investigation",
      date: "2024-06-15",
      location: "St. Mary's Hospital, Salem",
      anomalies: 7,
      evps: 3,
      status: "analyzed",
      collaborators: ["@GhostHunter92", "@ParanormalPro"],
      isPublic: true
    },
    {
      id: 2,
      name: "Cemetery Midnight Session",
      date: "2024-06-10",
      location: "Greenlawn Cemetery",
      anomalies: 12,
      evps: 5,
      status: "processing",
      collaborators: ["@SpiritSeeker"],
      isPublic: false
    }
  ];

  const mockHauntedLocations = [
    {
      id: 1,
      name: "Eastern State Penitentiary",
      location: "Philadelphia, PA",
      coordinates: { lat: 39.9686, lng: -75.1725 },
      activityLevel: "high",
      evidenceCount: 47,
      investigators: 23,
      lastActivity: "2 hours ago",
      description: "Historic prison with intense paranormal activity",
      recentEvidence: ["Shadow figure in Cell Block 12", "EVP: 'Get out'", "Temperature drop of 15°F"]
    },
    {
      id: 2,
      name: "Waverly Hills Sanatorium",
      location: "Louisville, KY",
      coordinates: { lat: 38.1347, lng: -85.9067 },
      activityLevel: "extreme",
      evidenceCount: 89,
      investigators: 41,
      lastActivity: "30 minutes ago",
      description: "Former tuberculosis hospital, one of the most haunted places in America",
      recentEvidence: ["Full body apparition in Room 502", "Multiple EVPs recorded", "Doors slamming shut"]
    },
    {
      id: 3,
      name: "Tower of London",
      location: "London, UK",
      coordinates: { lat: 51.5081, lng: -0.0759 },
      activityLevel: "high",
      evidenceCount: 34,
      investigators: 18,
      lastActivity: "1 day ago",
      description: "Historic castle with centuries of paranormal reports",
      recentEvidence: ["Anne Boleyn sighting", "Phantom footsteps", "Cold spots in Bloody Tower"]
    },
    {
      id: 4,
      name: "Poveglia Island",
      location: "Venice, Italy",
      coordinates: { lat: 45.3647, lng: 12.2967 },
      activityLevel: "extreme",
      evidenceCount: 67,
      investigators: 29,
      lastActivity: "5 hours ago",
      description: "Former plague quarantine station with dark history",
      recentEvidence: ["Screaming voices at night", "Ash falling from sky", "Phantom plague victims"]
    }
  ];

  const mockCommunityRequests = [
    {
      id: 1,
      title: "Help Analyze Victorian Mansion EVPs",
      user: "@VictorianGhost",
      location: "Savannah, GA",
      urgency: "high",
      reward: "Premium Credits"
    },
    {
      id: 2,
      title: "Shadow Figure Analysis Needed",
      user: "@ShadowWatcher",
      location: "Portland, OR",
      urgency: "medium",
      reward: "Community Points"
    }
  ];

  const mockAnalysis = {
    videoAnomalies: [
      { timestamp: "00:02:34", type: "Shadow Movement", confidence: 87 },
      { timestamp: "00:05:12", type: "Orb Detection", confidence: 92 },
      { timestamp: "00:08:45", type: "Facial Pattern", confidence: 73 }
    ],
    audioAnomalies: [
      { timestamp: "00:03:15", type: "EVP Detected", text: "Help me", confidence: 85 },
      { timestamp: "00:06:22", type: "Whisper", text: "Unknown", confidence: 67 }
    ],
    contextualData: {
      moonPhase: "Waning Gibbous (78%)",
      weather: "Clear, 62°F, Low Humidity",
      geomagneticActivity: "Moderate (Kp-index: 4)"
    }
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResults(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  // Enhanced Ghost Logo Component with bigger ghost, white body, neon pink horns, neon yellow halo
  const EntityLogo = ({ size = "text-2xl" }) => (
    <div className={`${size} font-bold text-white flex items-center space-x-3`} style={{fontFamily: 'serif'}}>
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" className="text-white">
          {/* Neon Yellow Halo */}
          <ellipse cx="24" cy="10" rx="18" ry="4" fill="none" stroke="#fbbf24" strokeWidth="3" className="animate-pulse drop-shadow-lg" style={{filter: 'drop-shadow(0 0 8px #fbbf24)'}}/>
          
          {/* Ghost body - bigger and white */}
          <path d="M10 18 C10 12, 16 6, 24 6 C32 6, 38 12, 38 18 L38 36 C38 39, 35 39, 33 37 C31 35, 29 37, 27 36 C25 34, 24 36, 23 34 C22 36, 21 34, 19 36 C17 37, 15 35, 13 37 C10 39, 10 36, 10 36 Z" 
                fill="currentColor" opacity="0.95" className="drop-shadow-lg"/>
          
          {/* Neon Pink Devil horns */}
          <path d="M16 10 L13 4 L18 7 Z" fill="#ec4899" className="drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px #ec4899)'}}/>
          <path d="M32 10 L35 4 L30 7 Z" fill="#ec4899" className="drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px #ec4899)'}}/>
          
          {/* Eyes */}
          <circle cx="18" cy="18" r="3" fill="#000"/>
          <circle cx="30" cy="18" r="3" fill="#000"/>
          
          {/* Mouth */}
          <ellipse cx="24" cy="27" rx="4" ry="3" fill="#000"/>
        </svg>
      </div>
      <span className="text-pink-400 animate-pulse" style={{
        fontFamily: 'serif',
        textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
        letterSpacing: '2px',
        fontWeight: 'bold'
      }}>
        ENTITY
      </span>
    </div>
  );

  const Navigation = () => (
    <nav className="bg-black border-b border-pink-500 p-4 shadow-lg shadow-pink-500/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <EntityLogo />
          <div className="text-green-400 text-sm">AI Paranormal Analysis</div>
        </div>
        <div className="flex space-x-4">
          {['dashboard', 'upload', 'analysis', 'maps', 'community', 'cases', 'contact'].map(view => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-4 py-2 rounded transition-all ${
                currentView === view 
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50' 
                  : 'text-gray-300 hover:text-pink-400 hover:bg-gray-900'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="text-center py-8">
        <EntityLogo size="text-6xl" />
        <h1 className="text-4xl font-bold text-pink-400 mb-4 mt-4" style={{
          textShadow: '0 0 10px #ec4899',
          fontFamily: 'serif'
        }}>
          Welcome to the Entity Core
        </h1>
        <p className="text-gray-300 text-lg">
          Advanced AI-Powered Paranormal Evidence Analysis & Global Community Collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black border border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/20">
          <div className="text-green-400 text-2xl mb-2">📊</div>
          <h3 className="text-green-400 font-bold mb-2">Total Cases</h3>
          <div className="text-3xl font-bold text-white">{mockCases.length}</div>
        </div>

        <div className="bg-black border border-yellow-500 rounded-lg p-6 shadow-lg shadow-yellow-500/20">
          <div className="text-yellow-400 text-2xl mb-2">🔍</div>
          <h3 className="text-yellow-400 font-bold mb-2">Anomalies Detected</h3>
          <div className="text-3xl font-bold text-white">19</div>
        </div>

        <div className="bg-black border border-pink-500 rounded-lg p-6 shadow-lg shadow-pink-500/20">
          <div className="text-pink-400 text-2xl mb-2">🎵</div>
          <h3 className="text-pink-400 font-bold mb-2">EVPs Captured</h3>
          <div className="text-3xl font-bold text-white">8</div>
        </div>

        <div className="bg-black border border-purple-500 rounded-lg p-6 shadow-lg shadow-purple-500/20">
          <div className="text-purple-400 text-2xl mb-2">🌍</div>
          <h3 className="text-purple-400 font-bold mb-2">Global Locations</h3>
          <div className="text-3xl font-bold text-white">{mockHauntedLocations.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-pink-400 font-bold text-xl mb-4">Recent Investigations</h3>
          <div className="space-y-3">
            {mockCases.map(case_ => (
              <div key={case_.id} className="flex items-center justify-between p-3 bg-gray-900 rounded border border-gray-700 hover:border-pink-500 transition-all cursor-pointer">
                <div>
                  <div className="text-white font-semibold">{case_.name}</div>
                  <div className="text-gray-400 text-sm">{case_.location} • {case_.date}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    {case_.collaborators.map(collab => (
                      <span key={collab} className="text-xs bg-purple-500 text-white px-2 py-1 rounded">
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-green-400">{case_.anomalies} anomalies</span>
                  <span className="text-yellow-400">{case_.evps} EVPs</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    case_.status === 'analyzed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {case_.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-purple-400 font-bold text-xl mb-4">Global Hotspots</h3>
          <div className="space-y-3">
            {mockHauntedLocations.slice(0, 3).map(location => (
              <div key={location.id} className="p-3 bg-gray-900 rounded border border-gray-700 hover:border-purple-500 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{location.name}</div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    location.activityLevel === 'extreme' ? 'bg-red-500 text-white' : 
                    location.activityLevel === 'high' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {location.activityLevel}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">{location.location}</div>
                <div className="flex items-center space-x-4 mt-2 text-sm">
                  <span className="text-green-400">{location.evidenceCount} evidence</span>
                  <span className="text-purple-400">{location.investigators} investigators</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentView('maps')}
            className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded font-semibold transition-all"
          >
            View Global Map
          </button>
        </div>
      </div>
    </div>
  );

  const MapsView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">🌍 Global Paranormal Map</h2>
      
      <div className="bg-black border border-purple-500 rounded-lg p-6 shadow-lg shadow-purple-500/20">
        <h3 className="text-purple-400 font-bold text-xl mb-4">🗺️ Worldwide Haunted Locations Database</h3>
        <p className="text-gray-300 mb-4">
          Explore haunted locations worldwide, connect with local investigators, and share evidence from the most active paranormal hotspots.
        </p>
        
        {/* Mock Map Interface */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg h-96 flex items-center justify-center mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          <div className="text-center z-10">
            <div className="text-6xl mb-4">🗺️</div>
            <div className="text-white font-bold text-xl mb-2">Interactive Paranormal Map</div>
            <div className="text-gray-400">Click on locations to view evidence and connect with investigators</div>
          </div>
          
          {/* Mock location markers */}
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Eastern State Penitentiary"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-orange-500 rounded-full animate-pulse cursor-pointer" title="Waverly Hills"></div>
          <div className="absolute top-1/5 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Tower of London"></div>
          <div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Poveglia Island"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900 border border-red-500 rounded-lg p-4 text-center">
            <div className="text-red-400 font-bold text-2xl">237</div>
            <div className="text-gray-300 text-sm">Extreme Activity Locations</div>
          </div>
          <div className="bg-gray-900 border border-orange-500 rounded-lg p-4 text-center">
            <div className="text-orange-400 font-bold text-2xl">1,847</div>
            <div className="text-gray-300 text-sm">Evidence Submissions</div>
          </div>
          <div className="bg-gray-900 border border-green-500 rounded-lg p-4 text-center">
            <div className="text-green-400 font-bold text-2xl">12,394</div>
            <div className="text-gray-300 text-sm">Global Investigators</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-pink-400 font-bold text-xl mb-4">🔥 Most Active Locations</h3>
          <div className="space-y-4">
            {mockHauntedLocations.map(location => (
              <div 
                key={location.id} 
                className="p-4 bg-gray-900 rounded border border-gray-700 hover:border-pink-500 transition-all cursor-pointer"
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{location.name}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      location.activityLevel === 'extreme' ? 'bg-red-500 text-white' : 
                      location.activityLevel === 'high' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {location.activityLevel}
                    </span>
                    <span className="text-gray-400 text-xs">{location.lastActivity}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mb-2">{location.location}</div>
                <div className="text-gray-300 text-sm mb-3">{location.description}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-green-400">{location.evidenceCount} evidence</span>
                    <span className="text-purple-400">{location.investigators} investigators</span>
                  </div>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm transition-all">
                    Join Investigation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-4">📸 Recent Global Evidence</h3>
          <div className="space-y-4">
            {[
              { user: "@TokyoGhostHunter", location: "Aokigahara Forest, Japan", evidence: "Shadow figure captured on thermal", time: "15 min ago", type: "video" },
              { user: "@LondonSpirits", location: "Tower of London, UK", evidence: "EVP: 'The crown... my crown...'", time: "32 min ago", type: "audio" },
              { user: "@SalemWitch", location: "Salem, MA", evidence: "Orb formation in cemetery", time: "1 hour ago", type: "photo" },
              { user: "@RomanGhost", location: "Colosseum, Italy", evidence: "Gladiator apparition sighting", time: "2 hours ago", type: "video" }
            ].map((evidence, index) => (
              <div key={index} className="p-3 bg-gray-900 rounded border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{evidence.user}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      evidence.type === 'video' ? 'bg-red-500 text-white' :
                      evidence.type === 'audio' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {evidence.type}
                    </span>
                    <span className="text-gray-400 text-xs">{evidence.time}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mb-1">{evidence.location}</div>
                <div className="text-gray-300 text-sm">{evidence.evidence}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-900 border border-purple-500 rounded-lg">
            <h4 className="text-purple-400 font-bold mb-2">📤 Submit Location Evidence</h4>
            <p className="text-gray-300 text-sm mb-3">Share your evidence from any haunted location worldwide</p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded font-semibold transition-all">
              Upload Evidence to Map
            </button>
          </div>
        </div>
      </div>

      {/* Location Detail Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black border border-purple-500 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-400 font-bold text-xl">{selectedLocation.name}</h3>
              <button 
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-gray-400 text-sm">Location</div>
                <div className="text-white">{selectedLocation.location}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Activity Level</div>
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedLocation.activityLevel === 'extreme' ? 'bg-red-500 text-white' : 
                  selectedLocation.activityLevel === 'high' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-black'
                }`}>
                  {selectedLocation.activityLevel}
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{selectedLocation.description}</p>
            
            <div className="mb-4">
              <h4 className="text-yellow-400 font-bold mb-2">Recent Evidence:</h4>
              <ul className="space-y-1">
                {selectedLocation.recentEvidence.map((evidence, index) => (
                  <li key={index} className="text-gray-300 text-sm">• {evidence}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-all">
                Join Investigation Team
              </button>
              <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-all">
                Share Evidence
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const CommunityView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Community Collaboration Hub</h2>
      
      <div className="bg-black border border-purple-500 rounded-lg p-6 shadow-lg shadow-purple-500/20">
        <h3 className="text-purple-400 font-bold text-xl mb-4">🤝 Join Forces to Free Spirits</h3>
        <p className="text-gray-300 mb-4">
          Connect with fellow investigators, share evidence, and work together to solve hauntings and help spirits find peace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => setShowCollabModal(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/50"
          >
            Request Community Help
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/50">
            Browse Active Cases
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-green-400 font-bold text-xl mb-4">🏆 Top Community Contributors</h3>
          <div className="space-y-3">
            {[
              { name: "@SpiritWhisperer", points: 2450, solved: 12 },
              { name: "@GhostDetective", points: 1890, solved: 8 },
              { name: "@ParanormalPro", points: 1650, solved: 7 }
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{user.name}</div>
                    <div className="text-gray-400 text-sm">{user.solved} spirits helped</div>
                  </div>
                </div>
                <div className="text-green-400 font-bold">{user.points} pts</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-4">🔥 Active Collaborations</h3>
          <div className="space-y-3">
            {[
              { title: "The Weeping Woman of Willow Creek", members: 4, progress: 75 },
              { title: "Phantom Footsteps Investigation", members: 3, progress: 45 },
              { title: "Victorian Mansion Mystery", members: 6, progress: 90 }
            ].map((collab, index) => (
              <div key={index} className="p-3 bg-gray-900 rounded border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{collab.title}</div>
                  <span className="text-yellow-400 text-sm">{collab.members} members</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all" 
                    style={{width: `${collab.progress}%`}}
                  ></div>
                </div>
                <div className="text-gray-400 text-sm">{collab.progress}% complete</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showCollabModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black border border-purple-500 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-purple-400 font-bold text-xl mb-4">Request Community Help</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Investigation Title"
                className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
              />
              <select className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-purple-400 focus:outline-none">
                <option>Urgency Level</option>
                <option>Low - General assistance</option>
                <option>Medium - Need expert input</option>
                <option>High - Spirit in distress</option>
              </select>
              <textarea
                placeholder="Describe what help you need..."
                rows="3"
                className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
              ></textarea>
              <div className="flex space-x-4">
                <button 
                  type="button"
                  onClick={() => setShowCollabModal(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-all"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const UploadView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Evidence Upload</h2>
      
      <div className="bg-black border-2 border-dashed border-pink-500 rounded-lg p-8 text-center shadow-lg shadow-pink-500/20">
        <div className="text-pink-400 text-6xl mb-4">📁</div>
        <h3 className="text-xl font-bold text-white mb-2">Upload Your Evidence</h3>
        <p className="text-gray-400 mb-4">Drag and drop video files or click to browse</p>
        <input
          type="file"
          multiple
          accept="video/*,audio/*"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-all shadow-lg shadow-pink-500/50"
        >
          Select Files
        </label>
      </div>

      <div className="bg-black border border-gray-700 rounded-lg p-6">
        <h3 className="text-yellow-400 font-bold text-xl mb-4">YouTube Import</h3>
        <div className="flex space-x-4">
          <input
            type="url"
            placeholder="Enter YouTube URL..."
            className="flex-1 bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-yellow-400 focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold transition-all">
            Import
          </button>
        </div>
      </div>

      <div className="bg-black border border-purple-500 rounded-lg p-6">
        <h3 className="text-purple-400 font-bold text-xl mb-4">🤝 Collaboration Settings</h3>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 rounded focus:ring-purple-500" />
            <span className="text-white">Allow community collaboration on this evidence</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 rounded focus:ring-purple-500" />
            <span className="text-white">Share with Entity AI research database (helps improve AI)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 rounded focus:ring-purple-500" />
            <span className="text-white">Add to global haunted locations map</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-4 h-4 text-purple-500 bg-gray-900 border-gray-600 rounded focus:ring-purple-500" />
            <span className="text-white">Request expert investigator review</span>
          </label>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h3 className="text-green-400 font-bold text-xl mb-4">Uploaded Files</h3>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded">
                <span className="text-white">{file.name}</span>
                <span className="text-gray-400 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            ))}
          </div>
          <button
            onClick={startAnalysis}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/50"
          >
            Start AI Analysis
          </button>
        </div>
      )}
    </div>
  );

  const AnalysisView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Entity Core Analysis</h2>
      
      {isAnalyzing && (
        <div className="bg-black border border-pink-500 rounded-lg p-8 text-center shadow-lg shadow-pink-500/20">
          <div className="text-pink-400 text-6xl mb-4 animate-spin">🔮</div>
          <h3 className="text-xl font-bold text-white mb-2">Analyzing Evidence...</h3>
          <p className="text-gray-400">The Entity is scanning for paranormal activity</p>
          <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
            <div className="bg-pink-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      )}

      {analysisResults && (
        <div className="space-y-6">
          <div className="bg-black border border-pink-500 rounded-lg p-6 shadow-lg shadow-pink-500/20">
            <h3 className="text-pink-400 font-bold text-xl mb-4">🎥 Video Anomalies</h3>
            <div className="space-y-3">
              {analysisResults.videoAnomalies.map((anomaly, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded border border-pink-500/30">
                  <div>
                    <span className="text-white font-semibold">{anomaly.type}</span>
                    <span className="text-gray-400 ml-2">at {anomaly.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-pink-400 font-bold">{anomaly.confidence}%</div>
                    <div className={`w-3 h-3 rounded-full ${
                      anomaly.confidence > 80 ? 'bg-red-500' : 
                      anomaly.confidence > 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black border border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/20">
            <h3 className="text-green-400 font-bold text-xl mb-4">🎵 Audio Analysis (EVP)</h3>
            <div className="space-y-3">
              {analysisResults.audioAnomalies.map((anomaly, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900 rounded border border-green-500/30">
                  <div>
                    <span className="text-white font-semibold">"{anomaly.text}"</span>
                    <span className="text-gray-400 ml-2">at {anomaly.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400 font-bold">{anomaly.confidence}%</div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                      Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black border border-yellow-500 rounded-lg p-6 shadow-lg shadow-yellow-500/20">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">🌙 Atmosphere Matrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-900 rounded">
                <div className="text-yellow-400 font-semibold">Moon Phase</div>
                <div className="text-white">{analysisResults.contextualData.moonPhase}</div>
              </div>
              <div className="p-4 bg-gray-900 rounded">
                <div className="text-yellow-400 font-semibold">Weather</div>
                <div className="text-white">{analysisResults.contextualData.weather}</div>
              </div>
              <div className="p-4 bg-gray-900 rounded">
                <div className="text-yellow-400 font-semibold">Geomagnetic</div>
                <div className="text-white">{analysisResults.contextualData.geomagneticActivity}</div>
              </div>
            </div>
          </div>

          <div className="bg-black border border-purple-500 rounded-lg p-6 shadow-lg shadow-purple-500/20">
            <h3 className="text-purple-400 font-bold text-xl mb-4">👥 Community Insights</h3>
            <p className="text-gray-300 mb-4">Share this analysis with the community to get additional perspectives and help identify the spirit's needs.</p>
            <div className="flex space-x-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded font-semibold transition-all">
                Share with Community
              </button>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded font-semibold transition-all">
                Request Expert Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const CasesView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Case Files</h2>
      
      <div className="grid gap-6">
        {mockCases.map(case_ => (
          <div key={case_.id} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-pink-500 transition-all cursor-pointer shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{case_.name}</h3>
              <div className="flex items-center space-x-2">
                {case_.isPublic && (
                  <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded">Public</span>
                )}
                <span className={`px-3 py-1 rounded ${
                  case_.status === 'analyzed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                }`}>
                  {case_.status}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
              <div>
                <div className="text-gray-400">Date</div>
                <div className="text-white">{case_.date}</div>
              </div>
              <div>
                <div className="text-gray-400">Location</div>
                <div className="text-white">{case_.location}</div>
              </div>
              <div>
                <div className="text-gray-400">Anomalies</div>
                <div className="text-green-400 font-bold">{case_.anomalies}</div>
              </div>
              <div>
                <div className="text-gray-400">EVPs</div>
                <div className="text-yellow-400 font-bold">{case_.evps}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Collaborators:</span>
                {case_.collaborators.map(collab => (
                  <span key={collab} className="text-xs bg-purple-500 text-white px-2 py-1 rounded">
                    {collab}
                  </span>
                ))}
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded text-sm transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Contact & Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black border border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/20">
          <h3 className="text-green-400 font-bold text-xl mb-4">📧 General Inquiries</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-green-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-green-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-green-400 focus:outline-none"
            ></textarea>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition-all">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-black border border-yellow-500 rounded-lg p-6 shadow-lg shadow-yellow-500/20">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">🛠️ Technical Support</h3>
            <p className="text-gray-300 mb-4">Need help with the app? Our technical team is here to assist.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold transition-all">
              Get Support
            </button>
          </div>

          <div className="bg-black border border-pink-500 rounded-lg p-6 shadow-lg shadow-pink-500/20">
            <h3 className="text-pink-400 font-bold text-xl mb-4">👻 Evidence Submission</h3>
            <p className="text-gray-300 mb-4">Have compelling evidence? Submit it for our expert review.</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded font-semibold transition-all">
              Submit Evidence
            </button>
          </div>

          <div className="bg-black border border-gray-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-xl mb-4">📱 Follow Us</h3>
            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all">YouTube</button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-all">Instagram</button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-all">TikTok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch(currentView) {
      case 'dashboard': return <Dashboard />;
      case 'upload': return <UploadView />;
      case 'analysis': return <AnalysisView />;
      case 'maps': return <MapsView />;
      case 'community': return <CommunityView />;
      case 'cases': return <CasesView />;
      case 'contact': return <ContactView />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {renderCurrentView()}
      </main>
      
      {/* Subscription Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 p-4 shadow-lg shadow-pink-500/20">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <span className="font-bold">Upgrade to Entity Pro</span>
            <span className="ml-2 text-sm opacity-90">Unlimited analysis • Global map access • Community collaboration • Expert reviews • Help free spirits worldwide</span>
          </div>
          <button className="bg-white text-pink-600 px-6 py-2 rounded font-bold hover:bg-gray-100 transition-all shadow-lg">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}